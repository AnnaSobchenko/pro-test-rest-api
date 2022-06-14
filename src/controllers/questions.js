const {
  userQuestion,
  // theoryQuestionCheck,
  // technicalQuestionCheck,
  questionCheck,
} = require("../models/questions");

const getQuestion = async (req, res, next) => {
  console.log("req.params :>> ", req.params);
  const questions = await userQuestion(req.params);
  res.status(200).send(questions);
};

// const checkTheoryQuestion = async (req, res, next) => {
//   const result = await theoryQuestionCheck(req.body);
//   res.status(200).send({"rightAnswers": result});
// };

// const checkTechnicalQuestion = async (req, res, next) => {
//   const result = await technicalQuestionCheck(req.body);
//   res.status(200).send({"rightAnswers": result });
// };

const checkQuestion = async (req, res, next) => {
  const result = await questionCheck(req.params.type, req.body);
  res.status(200).send({ rightAnswers: result });
};

module.exports = {
  getQuestion,
  // checkTheoryQuestion,
  // checkTechnicalQuestion,
  checkQuestion,
};
