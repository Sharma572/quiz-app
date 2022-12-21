import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helper";
import reducer from '../reducers/questionReducers'

const initialState = {
  questions, 
  currentQuestionIndex: 0,
  showResult: false,
  flagFire: false,
  correctAnswerCount: 0,
  answer: shuffleAnswers(questions[0]),
  currentAnswer: "",
  timer: false,
};

export const QuizContest = createContext();

export const QuizProvider = ({ children }) => {
  const state = useReducer(reducer, initialState);

 
  
  return (
    <QuizContest.Provider value={state} >
      {children}
    </QuizContest.Provider>
  );
};

