import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helper";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResult: false,
  correctAnswerCount: 0,
  answer: shuffleAnswers(questions[0]),
  currentAnswer: ''
};
const reducer = (state, action) => {
  console.log("reducer",state,action);
// console.log('answer', initialState.answer);
  switch (action.type) {

    case "SELECTED_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
          return{
            ...state,
            currentAnswer: action.payload,
            correctAnswerCount
          }
    }
    case "NEXT_QUESTION": {
      const showResult =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
        const answer = showResult ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        showResult,
        answer,
        currentAnswer: '',
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const QuizContest = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContest.Provider value={value}>{children}</QuizContest.Provider>;
};
