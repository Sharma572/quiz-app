import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContest } from "../context/quiz";

const Instuction = () => {
  const [quizState, dispatch] = useContext(QuizContest);

  console.log(quizState);

  let navigate = useNavigate();
  const routeChange = () => {
    dispatch({ type: "TIMER" });
  };
  let path = `/quiz`;
  navigate(path);
  // console.log("Timer", quizState);

  const toggleFullSceen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      <div className="instruction-container text-white container">
        <h1 className="text-5xl text-center m-5">
          Instruction for quiz test.
        </h1>
        <ul className="list-disc ml-6 mb-6 leading-10 font-meduim text-xl">
          <li>
            <p>
              20 questions(MCQ) on{" "}
              <span className="font-semibold">Html,Css and Javascript.</span>{" "}
            </p>
          </li>
          <li>
            <p>
              Questions may have multiple choices and correct answer carries 1
              marks
            </p>
          </li>
          <li>
            <p>
              Participants with the fastest submission of the Quiz with the
              highest score within the 20 minutes time duration will be the
              winners.
            </p>
          </li>
        </ul>
        <button
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => {
            toggleFullSceen();
            routeChange();
          }}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default Instuction;
