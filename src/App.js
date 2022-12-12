import React, { useContext, useState } from "react";
import Quiz from "./component/Quiz";
import { Routes, Route } from "react-router-dom";
import ShowAnswer from "./component/ShowAnswer";
import Instuction from "./component/Instuction";

import Countdown from "react-countdown";
import { QuizContest } from "./context/quiz";

const App = () => {
  const [quizState, dispatch] = useContext(QuizContest);
  let currDate = Date.now();

  const [timer, settimer] = useState(currDate);
  console.log(timer);
  return (
    <>
      {quizState.timer && (
        <Countdown date={timer + 1200000} className="text-2xl" />
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
