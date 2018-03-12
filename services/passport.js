const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
// const algoliasearch = require('algoliasearch');
// const client = algoliasearch(keys.algoliaClientID, keys.algoliaClientSecret);
// const index = client.initIndex('KoinVetDev');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  //proxy: true config option for redirect URI HTTPS to work
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      /*
      console.log('access token ', accessToken);
      console.log('refresh token ', refreshToken);
      console.log('profile:', profile);
      */
      const existingUser = await User.findOne({
        googleId: profile.id
      });

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        fullName: profile.displayName,
        pic: profile.photos[0].value
      }).save();

      user.objectID = user.id;
      user.save();

      // const algoliaObjectID = user.id;
      // user.objectID = user.id;
      // user.save();
      //
      // index.addObject(user, function(err, content) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   console.log(content);
      // });

      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'email', 'photos'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log('access token ', accessToken);
      //console.log('refresh token ', refreshToken);
      //console.log('profile:', profile);

      const existingUser = await User.findOne({ facebookId: profile.id });

      if (existingUser) {
        //console.log(existingUser);
        return done(null, existingUser);
      }

      const user = await new User({
        facebookId: profile.id,
        email: profile.emails[0].value,
        fullName: profile.displayName,
        pic: profile.photos[0].value
      }).save();
      //console.log(user);
      const algoliaObjectID = user.id;
      user.objectID = user.id;
      user.save();
      done(null, user);
    } //console.log(user);
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedinClientID,
      clientSecret: keys.linkedinClientSecret,
      callbackURL: '/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_basicprofile'],
      state: true,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      process.nextTick(async () => {
        //console.log(profile.emails[0].value);
        const existingUser = await User.findOne({ linkedinId: profile.id });

        if (existingUser) {
          //console.log(existingUser);
          return done(null, existingUser);
        }

        const user = await new User({
          linkedinId: profile.id,
          email: profile.emails[0].value,
          fullName: profile.displayName,
          pic: profile.photos[0].value
        }).save();
        //console.log(user);

        const algoliaObjectID = user.id;
        user.objectID = user.id;
        user.save();

        return done(null, user);
      });
    }
  )
);

// passport.use(
//   //proxy: true config option for redirect URI HTTPS to work
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callbackApplication',
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       /*
//       console.log('access token ', accessToken);
//       console.log('refresh token ', refreshToken);
//       console.log('profile:', profile);
//       */
//       const existingUser = await User.findOne({ googleId: profile.id });
//
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       const user = await new User({ googleId: profile.id }).save();
//       done(null, user);
//     }
//   )
// );
