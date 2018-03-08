const mongoose = require('mongoose');
const { Schema } = mongoose;

const windowSchema = new Schema({
  dateCreated: Date,
  startDate: Date,
  startTime: Date,
  endTime: Date,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('window', windowSchema);
