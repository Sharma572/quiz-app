import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helper";
import Testreducer from "../reducers/testReducer";
import reducer from '../reducers/questionReducers'

const initialState = {
  questions, 
  quesArr: [],
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
  const [stats,dispatch] = useReducer(Testreducer, initialState);

 
  const getQuesData= async()=>{
    const result = await axios.get(`https://my-json-server.typicode.com/Sharma572/rest_api/questions`)
    const quesArr = await result.data;
    console.log(quesArr);
    dispatch({ type: "API_DATA", payload: quesArr });
      
  }
  useEffect(() => {
    getQuesData();
    // console.log("useEffect runs");
  }, [])
  
  return (
    <QuizContest.Provider value={state} >
     {console.log(state)}
      {children}
    </QuizContest.Provider>
  );
};

