import React, { useContext, useEffect, useState } from "react";
import Quiz from "./component/Quiz";
import { Routes, Route } from "react-router-dom";
import ShowAnswer from "./component/ShowAnswer";
import Instuction from "./component/Instuction";

import { QuizContest } from "./context/quiz";
import Timer from "./component/Timer";
// import Timer from "@amplication/react-compound-timer/build";

const App = () => {

  const [quizState, dispatch] = useContext(QuizContest);

  
  const [tabHasFocus, setTabHasFocus] = useState(true);

  // Code for prevent to detect tab change. 
  useEffect(() => {
    const handleFocus = () => {
      console.log("Tab has focus");
      setTabHasFocus(true);
    };

    const handleBlur = () => {
      alert("Warning! You can't change tab");
      setTabHasFocus(false);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);



  // Refresh is disabled here
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "❌ Refresh Page is not allowed";
  };
  
  return (
    <>
      {/* {quizState.timer && (
        <Timer initialTime={1200000} direction="backward">
          {() => (
            <span className="text-xl text-center text-green-900 absolute top-2 left-36 bg-yellow-200 p-3">
             <span className="text-red-500 "><Timer.Minutes /></span>  minutes <Timer.Seconds /> seconds
            </span>
          )}
        </Timer>
      )} */}
      {quizState.timer && <Timer />}

      <Routes>
        <Route path="/" element={<Instuction />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/showAnswer" element={<ShowAnswer />} />
      </Routes>
    </>
  );
};

export default App;
