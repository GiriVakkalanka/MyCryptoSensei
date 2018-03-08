const mongoose = require('mongoose');
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const Window = mongoose.model('window');
const User = mongoose.model('users');

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
    '/auth/googleApplication',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callbackApplication',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/apply');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
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
    console.log(timeWindow);
    res.send(updatedUser);
  });
};
