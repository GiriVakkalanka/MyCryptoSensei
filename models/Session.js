const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const sessionSchema = new Schema({
  _expert: { type: Schema.Types.ObjectId, ref: 'users' },
  _client: { type: Schema.Types.ObjectId, ref: 'users' },
  vertical: Number,
  price: Number,
  active: { type: Boolean, default: true },
  dateStarted: Date,
  dateEnded: Date
});

mongoose.model('sessions', sessionSchema);
