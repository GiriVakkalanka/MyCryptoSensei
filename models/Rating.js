const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const ratingSchema = new Schema({
  _client: { type: Schema.Types.ObjectId, ref: 'users' },
  _expert: { type: Schema.Types.ObjectId, ref: 'users' },
  vertical: Number,
  rating: Number,
  date: Date
});

mongoose.model('ratings', ratingSchema);
