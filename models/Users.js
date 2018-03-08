const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const { Schema } = mongoose;
const RatingSchema = require('./Rating');
const ReviewSchema = require('./Review');
const SessionSchema = require('./Session');
const RequestSchema = require('./Request');
const WindowSchema = require('./Window');

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  linkedinId: String,
  fullName: String,
  firstName: String,
  lastName: String,
  pic: String,
  email: String,
  description: String,
  applied: { type: Boolean, default: false },
  accepted: { type: Boolean, default: null },
  sensei: { type: Boolean, default: false },
  services: [String],
  specialization: [String],
  city: String,
  country: String,
  rate: String,
  links: {},
  windows: [WindowSchema],
  ratingsReceived: [RatingSchema],
  reviewsReceived: [ReviewSchema],
  ratingsSubmitted: [RatingSchema],
  reviewsSubmitted: [ReviewSchema],
  _clients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  _experts: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  sessions: [SessionSchema],
  requestsReceived: [RequestSchema],
  requestsSubmitted: [RequestSchema],
  objectID: String
});

mongoose.model('users', userSchema);
