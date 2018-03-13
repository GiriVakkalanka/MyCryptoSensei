const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Request = mongoose.model('requests');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/submit-request', requireLogin, async (req, res) => {
    const { sensei, service, note, date, time } = req.body;
    const request = new Request({
      _sensei: sensei,
      _client: req.user.id,
      service,
      note,
      dateSent: Date.now(),
      dateRequested: Date(date),
      timeRequested: Date(time)
    });
    await request.save();
    res.send(request);
  });

  app.get('/api/get-requests', requireLogin, async (req, res) => {
    console.log(req.body);
    res.send('hi');
  });

  app.get('/api/get-sent-requests', requireLogin, async (req, res) => {
    console.log(req.body);
    res.send('hi');
  });

  app.get('/api/get-received-requests', requireLogin, async (req, res) => {
    console.log(req.body);
    res.send('hi');
  });

  app.post('/api/accept-request', requireLogin, async (req, res) => {
    console.log(req.body);
    res.send('hi');
  });

  app.post('/api/deny-request', requireLogin, async (req, res) => {
    console.log(req.body);
    res.send('hi');
  });
};
