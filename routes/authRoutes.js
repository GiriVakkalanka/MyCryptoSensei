const mongoose = require('mongoose');
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const Window = mongoose.model('window');
const User = mongoose.model('users');
const keys = require('../config/keys');
const algoliasearch = require('algoliasearch');
const client = algoliasearch(keys.algoliaClientID, keys.algoliaClientSecret);
const index = client.initIndex(keys.algoliaIndex);

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/redirect');
    }
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['email']
    })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/redirect');
    }
  );

  app.get('/auth/linkedin', passport.authenticate('linkedin'), (req, res) => {
    console.log('Shouldnt be called');
  });

  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin'),
    (req, res) => {
      res.redirect('/redirect');
    }
  );

  // app.get(
  //   '/auth/googleApplication',
  //   passport.authenticate('google', {
  //     scope: ['profile', 'email']
  //   })
  // );
  //
  // app.get(
  //   '/auth/google/callbackApplication',
  //   passport.authenticate('google'),
  //   (req, res) => {
  //     res.redirect('/apply');
  //   }
  // );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.post('/api/save_expertise_choices', requireLogin, async (req, res) => {
    const choices = req.body;
    console.log(choices);
    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.services = choices;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);

    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
    res.send(updatedUser);
  });

  app.post('/api/save_time_window', requireLogin, async (req, res) => {
    const timeWindow = req.body;
    const windowRecord = new Window({
      dateCreated: Date.now(),
      startDate: timeWindow.date,
      startTime: timeWindow.startTime,
      endTime: timeWindow.endTime,
      user: req.user._id
    });
    await windowRecord.save();

    const userWanted = await User.findOne({ _id: req.user.id });
    userWanted.windows.push(windowRecord);
    const updatedUser = await userWanted.save();
    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
    console.log(timeWindow);
    res.send(updatedUser);
  });

  app.post(
    '/api/save_specialization_choices',
    requireLogin,
    async (req, res) => {
      const specializationChoices = req.body;
      //console.log(specializationChoices);

      const userRecord = await User.findOne({ _id: req.user.id });
      userRecord.specialization = specializationChoices;
      const updatedUser = await userRecord.save();
      console.log(updatedUser);

      index.saveObject(updatedUser, function(err, content) {
        if (err) {
          console.log(err);
        }
        console.log(content);
      });

      res.send(updatedUser);
    }
  );

  app.post('/api/save_link_choices', requireLogin, async (req, res) => {
    const linkChoices = req.body;
    console.log(linkChoices);

    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.links = linkChoices;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);

    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });

    res.send(updatedUser);
  });

  app.post('/api/save_rate', requireLogin, async (req, res) => {
    //console.log('route called');
    const newRate = req.body;
    console.log(newRate);

    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.rate = newRate.rate;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);
    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
    res.send(updatedUser);
  });

  app.post('/api/save_info', requireLogin, async (req, res) => {
    //console.log('route called');
    const info = req.body;
    console.log(info);

    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.description = info.description;
    userRecord.city = info.city;
    userRecord.country = info.country;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);
    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
    res.send('hi');
  });

  app.get('/api/get_sensei_page', requireLogin, async (req, res) => {
    //console.log('reached');
    const { key } = req.query;
    //console.log(key);
    const senseiRecord = await User.findOne({ _id: key });
    console.log(senseiRecord);
    res.send(senseiRecord);
  });
};
