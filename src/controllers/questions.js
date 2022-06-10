const {
	technicalQuestion,
	theoryQuestion,
	theoryQuestionAll,
	technicalQuestionAll,
} = require("../models/questions");

const getTheoryQuestion = async (req, res, next) => {
  const questions = await theoryQuestion();
  res.status(200).send(questions);
};

const getTechnicalQuestion = async (req, res, next) => {
  const questions = await technicalQuestion();
  res.status(200).send(questions);
};

const getTheoryQuestionAll = async (req, res, next) => {
	const questions = await theoryQuestionAll();
	res.status(200).send(questions);
};

const getTechnicalQuestionAll = async (req, res, next) => {
	const questions = await technicalQuestionAll();
	res.status(200).send(questions);
};

module.exports = {
	getTechnicalQuestion,
	getTheoryQuestion,
	getTheoryQuestionAll,
	getTechnicalQuestionAll,
};
