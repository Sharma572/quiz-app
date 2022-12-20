import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { QuizContest } from "../context/quiz";
import Celebrate from "./Celebration";
import Question from "./Question";
import "./Quiz.css";
import Timer from "./Timer";

const Quiz = () => {
  // const [timeVal, setTime] = useState(300);
  const [quizState, dispatch] = useContext(QuizContest);
  // console.log("quizState", quizState);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/showAnswer`;
    navigate(path);
  };
  

  return (
    <>
      <div className="container">
        {quizState.showResult ? "" : <Timer />}
        {quizState.showResult ? <Celebrate /> : "" }
        {quizState.showResult && (
          <div className="result-page">
            <div className="text-6xl text-center mt-8">Congratulations</div>
            <div className="text-4xl text-center mt-5 text-gray-600">
              You 've have completed the quiz. in{" "}
            </div>
            <div className="text-3xl text-center mt-5 text-gray-600">
              you've got{" "}
              <span
                className={
                  quizState.correctAnswerCount < 4
                    ? "text-red-500"
                    : "text-green-800"
                }
              >
                {quizState.correctAnswerCount}
              </span>{" "}
              of
              {" " + quizState.questions.length}
            </div>
            <div className="flex justify-center mt-12">
              <button
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => dispatch({ type: "RESET" })}
              >
                Reset
              </button>
              <button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={routeChange}
              >
                Show Answer
              </button>
            </div>
          </div>
        )}
        {!quizState.showResult && (
          <div className="mt-12 flex flex-col items-center justify-items-center">
            <h1 className="text-5xl font-bold mb-4">
              Questions {quizState.currentQuestionIndex + 1} /{" "}
              {quizState.questions.length}
            </h1>
            <Question />
            <button
              disabled={!quizState.currentAnswer.length > 0}
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              class={` ${
                !quizState.currentAnswer.length > 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } py-3 text-3xl px-16 text-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
