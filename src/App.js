import React from 'react'
import Quiz from './component/Quiz'
import { Routes, Route } from "react-router-dom";
import ShowAnswer from './component/ShowAnswer'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='/showAnswer' element={<ShowAnswer />} />
    </Routes>
   
    </>
  )
}

export default App