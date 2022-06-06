const { Question } = require("../db/questionsModels");

const getTheoryQuestion = async (req, res, next) => {
  const question = await Question.find();
  res.status(200).send(question);
};

const getTechnicalQuestion = async (req, res, next) => {
  const question = technicalQuestion(req.user.token);
  res.status(200).send(question);
};

module.exports = {
  getTechnicalQuestion,
  getTheoryQuestion,
};
