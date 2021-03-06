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

function resultCount(answers, data) {
  let result = 0;
  answers.forEach((answer) => {
    const element = data
      .map((el) => el._id.toString())
      .indexOf(answer.questionId);
    if (data[element].rightAnswer === answer.userAnswer) {
      result += 1;
    }
  });
  console.log("rightAnswers: ", result);
  return result;
}

const userQuestion = async (testingType) => {
  const { type } = testingType;
  console.log("type :>> ", type);
  if (type === "QA technical training") {
    const technicalQuestions = await QuestionTechnical.find(
      {},
      { _id: 1, question: 1, answers: 1 }
    );
    const getRandomTechnicalQuestion = await randomQuestions(
      technicalQuestions
    );
    return getRandomTechnicalQuestion;
  }

  if (type === "Testing theory") {
    const theoryQuestions = await QuestionTheory.find(
      {},
      { _id: 1, question: 1, answers: 1 }
    );
    const getRandomTheoryQuestions = await randomQuestions(theoryQuestions);
    return getRandomTheoryQuestions;
  }
};

const questionCheck = async (type, answers) => {
  console.log('(type === "theory")', type === "theory");
  if (type === "theory") {
    const questions = await QuestionTheory.find({}, { _id: 1, rightAnswer: 1 });
    return resultCount(answers, questions);
  }
  console.log('(type === "technical")', type === "technical");
  if (type === "technical") {
    const questions = await QuestionTechnical.find(
      {},
      { _id: 1, rightAnswer: 1 }
    );
    return resultCount(answers, questions);
  }
};

module.exports = {
  userQuestion,
  questionCheck,
};
