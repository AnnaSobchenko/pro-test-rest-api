const mongoose = require("mongoose");

const questionTechnicalSchema = new mongoose.Schema({
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

const QuestionTechnical = mongoose.model(
  "questions-technicals",
  questionTechnicalSchema
);
const QuestionTheory = mongoose.model(
  "questions-theories",
  questionTechnicalSchema
);
module.exports = {
  QuestionTechnical,
  QuestionTheory,
};
