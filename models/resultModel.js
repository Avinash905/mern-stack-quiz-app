const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  pointsEarned: {
    type: Number,
    required: true,
  },
  achieved: {
    type: String,
    required: true,
  },
  attempts: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Result = mongoose.model("Result", schema);
module.exports = Result;
