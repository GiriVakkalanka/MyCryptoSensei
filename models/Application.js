const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const UserSchema = require('./Users');
const { Schema } = mongoose;

const applicationSchema = new Schema({
  accepted: { type: Boolean, default: null },
  rejected: { type: Boolean, default: false },
  dateSubmitted: Date,
  user: UserSchema,
  services: [],
  links: {}
});

mongoose.model('application', applicationSchema);
