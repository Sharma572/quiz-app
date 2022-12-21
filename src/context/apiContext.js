import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { shuffleAnswers } from "../helper";

export const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [quizQuestion, setQuizQuestion] = useState({
    questions: [],
    currentQuestionIndex: 0,
    showResult: false,
    flagFire: false,
    correctAnswerCount: 0,
    currentAnswer: "",
    timer: false,
  });
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://my-json-server.typicode.com/Sharma572/rest_api/questions`
      );
      setQuizQuestion({ ...quizQuestion, questions: data });
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        quizQuestion,
       
      }}
    >
      {console.log("Q", quizQuestion)}
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
