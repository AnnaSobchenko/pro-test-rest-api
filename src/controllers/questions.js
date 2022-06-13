const {
  userQuestion,
  // technicalQuestion,
  // theoryQuestion,
  theoryQuestionCheck,
  technicalQuestionCheck,
} = require("../models/questions");

const getQuestion = async (req, res, next) => {
  const questions = await userQuestion(req.params);
  res.status(200).send(questions);
};

// const getTechnicalQuestion = async (req, res, next) => {
//   const questions = await technicalQuestion();
//   res.status(200).send(questions);
// };

const checkTheoryQuestion = async (req, res, next) => {
  const result = await theoryQuestionCheck(req.body);
  res.status(200).send({ rightAnswers: result });
};

const checkTechnicalQuestion = async (req, res, next) => {
  const result = await technicalQuestionCheck(req.body);
  res.status(200).send({ rightAnswers: result });
};

module.exports = {
  getQuestion,
  checkTheoryQuestion,
  checkTechnicalQuestion,
};
