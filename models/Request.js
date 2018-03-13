const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const requestSchema = new Schema({
  _sensei: { type: Schema.Types.ObjectId, ref: 'users' },
  _client: { type: Schema.Types.ObjectId, ref: 'users' },
  senseiName: String,
  senseiPic: String,
  clientPic: String,
  clientName: String,
  service: String,
  note: String,
  dateRequested: Date,
  timeRequested: Date,
  accepted: { type: Boolean, default: null },
  new: { type: Boolean, default: true },
  expired: { type: Boolean, default: false },
  dateSent: Date,
  dateAccepted: Date
});

mongoose.model('requests', requestSchema);
