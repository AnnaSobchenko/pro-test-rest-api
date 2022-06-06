const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true],
  },
  questionId: {
    type: String,
    required: [true],
    unique: true,
  },
  answers: {
    type: Object,
    default: [],
  },
  rightAnswer: {
    type: String,
  },
});

const Question = mongoose.model("questions-theories", questionSchema);

module.exports = {
  Question,
};
