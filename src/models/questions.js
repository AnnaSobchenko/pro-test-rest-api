const {
  QuestionTheories,
  QuestionTechnicals,
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
  console.log("numQuestionsArr", numQuestionsArr);
  numQuestionsArr.map((el) => questionsTwelve.push(questions[el]));

  return questionsTwelve;
}
// написала функцию по формированию массива из чисел случайного порядка. Может нам подойдет
// в консоле можно запустить посмотреть
// console.log(
//   randomQuestion([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26,
//   ])
// );
const technicalQuestion = async () => {
  const question = await QuestionTechnicals.find();
  const getRandomQuestion = await randomQuestions(question);
  return getRandomQuestion;
};
const theoryQuestion = () => {};

module.exports = {
  theoryQuestion,
  technicalQuestion,
};
