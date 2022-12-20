import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QuizProvider} from "./context/quiz";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <App />
      </QuizProvider>
    </BrowserRouter> 
  </React.StrictMode>
);
