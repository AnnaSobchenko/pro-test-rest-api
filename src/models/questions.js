const {
  QuestionTheories,
  QuestionTechnical,
} = require("../db/questionsModels");

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
  const questions = await QuestionTechnical.find();
  const getRandomQuestion = await randomQuestions(questions);
  return getRandomQuestion;
};

const theoryQuestion = async () => {
  const questionsTeor = await QuestionTheories.find();
  console.log("questions :>> ", questionsTeor);
  const getRandomQuestion = await randomQuestions(questionsTeor);
  return getRandomQuestion;
};

module.exports = {
  theoryQuestion,
  technicalQuestion,
};
