import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QuizProvider } from "./context/quiz";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { APIContextProvider } from "./context/apiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <APIContextProvider>
        <App />
        </APIContextProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);
