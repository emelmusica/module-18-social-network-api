const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      // timestamp to a user-friendly format
      return new Date(timestamp).toISOString();
    },
  },
});

const Reaction = mongoose.model('reaction', reactionSchema);

module.exports = Reaction;
