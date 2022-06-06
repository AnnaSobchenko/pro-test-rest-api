const {
  QuestionTheories,
  QuestionTechnicals,
} = require("../db/questionsModels");

const { technicalQuestion } = require("../models/questions");

const getTheoryQuestion = async (req, res, next) => {
  const question = await QuestionTheories.find();
  res.status(200).send(question);
};

const getTechnicalQuestion = async (req, res, next) => {
  const question = await technicalQuestion();
  console.log("question :>> ", question);
  res.status(200).send(question);
};

module.exports = {
  getTechnicalQuestion,
  getTheoryQuestion,
};
