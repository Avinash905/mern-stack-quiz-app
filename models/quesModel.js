const mongoose = require("mongoose");

const schema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  answerIndex: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Question = mongoose.model("Question", schema);
module.exports = Question;
