export const shuffleAnswers =(questions)=> {
    // console.log('reached', questions.correctAnswer)
const unShuffledAnswer = [
  questions.correctAnswer,
  ...questions.incorrectAnswers,
];

return unShuffledAnswer
  .map((answer) => ({ sort: Math.random(), value: answer }))
  .sort((a, b) => a.sort - b.sort)
  .map((obj) => obj.value);
}