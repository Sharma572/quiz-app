import questions from "../data";
import { shuffleAnswers } from "../helper";

const Questionreducer = (state, action) => {
  //   console.log("reducer", state, action);

  switch (action.type) {
    // case "API_DATA":
    //   return {
    //     ...state,
    //     quesArr: action.payload,
    //   };

    case "SELECTED_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResult =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answer = showResult
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResult,
        answer,
        currentAnswer: "",
      };
    }
    case "TIMER": {
      // const startTimer = true
      return { ...state, timer: true };
    }
    case "RESET":
      return {
        ...state,
        questions,
        currentQuestionIndex: 0,
        showResult: false,
        flagFire: false,
        correctAnswerCount: 0,
        answer: shuffleAnswers(questions[0]),
        currentAnswer: "",
        timer: false,
      };
    default:
      return state;
  }
};

export default Questionreducer;
