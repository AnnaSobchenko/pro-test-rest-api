const mongoose = require("mongoose");

const questionTheoriesSchema = new mongoose.Schema({
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

const QuestionTheories = mongoose.model(
  "questions-theories",
  questionTheoriesSchema
);

module.exports = {
  QuestionTheories,
};
const questionTechnicalsSchema = new mongoose.Schema({
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

const QuestionTechnicals = mongoose.model(
  "questions-technicals",
  questionTechnicalsSchema
);

module.exports = {
  QuestionTechnicals,
};
