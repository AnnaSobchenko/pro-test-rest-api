const { QuestionTechnical, QuestionTheory } = require("../db/questionsModel");

function randomQuestions(questions) {
  let numQuestionsArr = [];
  let questionsTwelve = [];
  let random = 0;
  for (let i = 0; i < 12; i++) {
    random = Math.floor(Math.random() * questions.length);
    if (!numQuestionsArr.includes(random)) {
      numQuestionsArr[i] = random;
    } else {
      i = i - 1;
    }
  }
  numQuestionsArr.map((el) => questionsTwelve.push(questions[el]));

  return questionsTwelve;
}

const technicalQuestion = async () => {
  const questions = await QuestionTechnical.find(
    {},
    { _id: 1, question: 1, answers: 1 }
  );
  const getRandomQuestion = await randomQuestions(questions);
  return getRandomQuestion;
};

const theoryQuestion = async () => {
  const questions = await QuestionTheory.find(
    {},
    { _id: 1, question: 1, answers: 1 }
  );
  const getRandomQuestion = await randomQuestions(questions);
  return getRandomQuestion;
};

const technicalQuestionCheck = async () => {
  const questions = await QuestionTechnical.find(
		{},
		{ _id: 1, rightAnswer: 1 }
	);
  
  return questions;
};

const theoryQuestionCheck = async () => {
  const questions = await QuestionTheory.find(
		{},
		{ _id: 1, rightAnswer: 1 }
	);
  
  return questions;
};

module.exports = {
  theoryQuestion,
  technicalQuestion,
  technicalQuestionCheck,
  theoryQuestionCheck,
};
