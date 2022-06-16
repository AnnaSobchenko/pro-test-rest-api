const {
  userQuestion,
  questionCheck,
} = require("../services/questions");

const getQuestion = async (req, res, next) => {
  const questions = await userQuestion(req.params);
  res.status(200).send(questions);
};

const checkQuestion = async (req, res, next) => {
  // console.log('req.params.type req.body', req.params, "---",req.body)
  const result = await questionCheck(req.params.type, req.body);
  console.log('result', result)
  res.status(200).send({ rightAnswers: result });
};

module.exports = {
  getQuestion, 
  checkQuestion,
};
