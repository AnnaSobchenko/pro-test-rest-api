const {
  technicalQuestion,
  theoryQuestion,
  theoryQuestionCheck,
  technicalQuestionCheck,
} = require("../models/questions");

const getTheoryQuestion = async (req, res, next) => {
  const questions = await theoryQuestion();
  res.status(200).send(questions);
};

const getTechnicalQuestion = async (req, res, next) => {
  const questions = await technicalQuestion();
  res.status(200).send(questions);
};

const checkTheoryQuestion = async (req, res, next) => {
  const result = await theoryQuestionCheck(req);
  res.status(200).send(result);
};

const checkTechnicalQuestion = async (req, res, next) => {
  console.log("req.body", req.body);
  const result = await technicalQuestionCheck(req.body);
  res.status(200).send(result);
};

module.exports = {
  getTechnicalQuestion,
  getTheoryQuestion,
  checkTheoryQuestion,
  checkTechnicalQuestion,
};
