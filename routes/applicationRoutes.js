const mongoose = require('mongoose');
const Application = mongoose.model('application');
const User = mongoose.model('users');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');
const algoliasearch = require('algoliasearch');
const client = algoliasearch(keys.algoliaClientID, keys.algoliaClientSecret);
const index = client.initIndex('KoinVetDev');

module.exports = app => {
  app.get('/api/get-new-applications', async (req, res) => {
    const applications = await Application.find({ accepted: null });
    //console.log(items);
    res.send(applications);
  });
  app.post('/api/application', requireLogin, async (req, res) => {
    console.log(req.body);
    const { services, links } = req.body;
    const application = new Application({
      services,
      links,
      user: req.user,
      dateSubmitted: Date.now()
    });
    await application.save();
    res.send(req.user);
  });

  app.post('/api/accept-application', requireLogin, async (req, res) => {
    const key = req.body;
    const acceptedApplication = await Application.findOne({
      _id: key.applicationId
    });

    acceptedApplication.accepted = true;
    await acceptedApplication.save();

    const acceptedUser = await User.findOne({ _id: key.userId });
    const algoliaObjectID = key.userId;
    acceptedUser.objectID = key.userId;

    acceptedUser.sensei = true;
    acceptedUser.services = acceptedApplication.services;
    acceptedUser.links = acceptedApplication.links;
    await acceptedUser.save();
    index.addObject(acceptedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });

    const applications = await Application.find({ accepted: null });
    res.send(applications);
  });

  app.post('/api/deny-application', requireLogin, async (req, res) => {
    const key = req.body;
    const deniedApplication = await Application.findOne({
      _id: key.applicationId
    });
    deniedApplication.accepted = false;
    deniedApplication.rejected = true;
    await deniedApplication.save();

    const applications = await Application.find({ accepted: null });
    res.send(applications);
  });
};
