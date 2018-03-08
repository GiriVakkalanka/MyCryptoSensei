const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const requestSchema = new Schema({
  _expert: { type: Schema.Types.ObjectId, ref: 'users' },
  _client: { type: Schema.Types.ObjectId, ref: 'users' },
  service: String,
  details: String,
  requestedTime: Date,
  accepted: { type: Boolean, default: false },
  dateSent: Date,
  dateAccepted: Date
});

mongoose.model('requests', requestSchema);
