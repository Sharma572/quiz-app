import React, { useContext, useState } from "react";
import Quiz from "./component/Quiz";
import { Routes, Route } from "react-router-dom";
import ShowAnswer from "./component/ShowAnswer";
import Instuction from "./component/Instuction";

import { QuizContest } from "./context/quiz";
import Timer from "@amplication/react-compound-timer/build";

const App = () => {

  const [quizState, dispatch] = useContext(QuizContest);
  

  // document.getElementById(minutes).innerText === 1200000 ? "text-red-300" : "text-yellow-900"
  return (
    <>
      {quizState.timer && (
        <Timer initialTime={1200000} direction="backward">
          {() => (
            <span className="text-xl text-center text-green-900 absolute top-2 left-36 bg-yellow-200 p-3">
              <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </span>
          )}
        </Timer>
      )}

      <Routes>
        <Route path="/" element={<Instuction />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/showAnswer" element={<ShowAnswer />} />
      </Routes>
    </>
  );
};

export default App;
