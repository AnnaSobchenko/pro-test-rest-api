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
	const questions = await theoryQuestionCheck();
	res.status(200).send(questions);
};

const checkTechnicalQuestion = async (req, res, next) => {
	const questions = await technicalQuestionCheck();
	res.status(200).send(questions);
};

module.exports = {
	getTechnicalQuestion,
	getTheoryQuestion,
	checkTheoryQuestion,
	checkTechnicalQuestion,
};
