const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const sessionSchema = new Schema({
  _request: { type: Schema.Types.ObjectId, ref: 'User' },
  expert: UserSchema,
  client: UserSchema,
  service: String,
  rate: String,
  paid: { type: Boolean, default: false },
  upcoming: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  ended: { type: Boolean, default: false },
  dateCreated: Date,
  dateStarted: Date,
  timeStarted: Date
});

mongoose.model('sessions', sessionSchema);
