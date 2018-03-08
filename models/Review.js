const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const reviewSchema = new Schema({
  _client: { type: Schema.Types.ObjectId, ref: 'users' },
  _expert: { type: Schema.Types.ObjectId, ref: 'users' },
  vertical: Number,
  review: String,
  date: Date
});

mongoose.model('reviews', reviewSchema);
