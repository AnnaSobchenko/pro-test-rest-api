const getTechnicalQuestion = async (res, req, next) => {
  const question = technicalQuestion(req.user.token);
  res.status(200).send(question);
};
const getTheoryQuestion = async (res, req, next) => {
  const question = theoryQuestion(req.user.token);
  res.status(200).send(question);
};

module.exports = {
  getTechnicalQuestion,
  getTheoryQuestion,
};
