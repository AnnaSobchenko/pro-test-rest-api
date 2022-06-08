const { technicalQuestion, theoryQuestion } = require("../models/questions");

const getTheoryQuestion = async (req, res, next) => {
  const questions = await theoryQuestion();
  console.log("questions :>> ", questions);
  res.status(200).send(questions);
};

const getTechnicalQuestion = async (req, res, next) => {
  const questions = await technicalQuestion();
  res.status(200).send(questions);
};

module.exports = {
  getTechnicalQuestion,
  getTheoryQuestion,
};
