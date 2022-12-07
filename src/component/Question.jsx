import React, { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Answer from "./Answer";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContest);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <>
      <div className="mb-4 text-2xl">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answer.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) => {
              console.log(answerText);
              dispatch({ type: "SELECTED_ANSWER", payload: answerText });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Question;
