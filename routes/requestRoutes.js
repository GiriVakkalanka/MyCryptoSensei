const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Request = mongoose.model('requests');
const User = mongoose.model('users');
const Session = mongoose.model('sessions');

module.exports = app => {
  app.post('/api/submit-request', requireLogin, async (req, res) => {
    const { sensei, service, note, date, time } = req.body;
    const senseiRecord = await User.findOne({ _id: sensei });
    const clientRecord = await User.findOne({ _id: req.user.id });
    const request = new Request({
      _sensei: sensei,
      _client: req.user.id,
      senseiName: senseiRecord.fullName,
      clientName: clientRecord.fullName,
      senseiPic: senseiRecord.pic,
      clientPic: clientRecord.pic,
      service,
      note,
      dateSent: Date.now(),
      dateRequested: Date(date),
      timeRequested: Date(time)
    });
    await request.save();
    const receivedRequests = await Request.find({ _sensei: req.user.id });
    const sentRequests = await Request.find({ _client: req.user.id });
    const requests = {
      receivedRequests,
      sentRequests
    };

    res.send(requests);
  });

  app.get('/api/get-requests', requireLogin, async (req, res) => {
    const receivedRequests = await Request.find({ _sensei: req.user.id });
    const sentRequests = await Request.find({ _client: req.user.id });
    const requests = {
      receivedRequests,
      sentRequests
    };

    res.send(requests);
  });

  app.post('/api/accept-request', requireLogin, async (req, res) => {
    const { requestId } = req.body;
    const request = await Request.findOne({ _id: requestId });
    request.accepted = true;
    request.dateAccepted = Date.now();
    await request.save();
    const clientRecord = await User.findOne({ _id: request._client });

    const session = new Session({
      _request: request._id,
      _expertId: req.user.id,
      _clientId: request._client,
      expert: req.user,
      client: clientRecord,
      service: request.service,
      note: request.note,
      rate: req.user.rate,
      dateCreated: Date.now(),
      dateStarted: request.dateRequested,
      timeStarted: request.timeRequested
    });

    await session.save();
    //console.log(session);

    const receivedRequests = await Request.find({ _sensei: req.user.id });
    const sentRequests = await Request.find({ _client: req.user.id });
    const requests = {
      receivedRequests,
      sentRequests
    };
    res.send(requests);
  });

  app.post('/api/deny-request', requireLogin, async (req, res) => {
    const { requestId } = req.body;
    const request = await Request.findOne({ _id: requestId });
    request.accepted = false;
    await request.save();

    const receivedRequests = await Request.find({ _sensei: req.user.id });
    const sentRequests = await Request.find({ _client: req.user.id });
    const requests = {
      receivedRequests,
      sentRequests
    };
    res.send(requests);
  });

  app.get('/api/get-session-page', requireLogin, async (req, res) => {
    //console.log('reached');
    const { requestId } = req.query;
    //console.log(sessionId);
    //console.log(req.query);
    const sessionRecord = await Session.findOne({ _request: requestId });
    console.log(sessionRecord);
    res.send(sessionRecord);
  });

  app.get('/api/get-sessions', requireLogin, async (req, res) => {
    const requestedSessions = await Session.find({ _clientId: req.user.id });
    const acceptedSessions = await Session.find({ _expertId: req.user.id });
    const sessions = {
      requestedSessions,
      acceptedSessions
    };

    res.send(sessions);
  });

  app.post('/api/activate-session', requireLogin, async (req, res) => {
    const { sessionId } = req.body;
    console.log(sessionId);
    const session = await Session.findOne({ _id: sessionId });
    session.paid = true;
    await session.save();
    res.send(session);
  });
};
