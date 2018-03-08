const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

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
      done(null, user);
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
