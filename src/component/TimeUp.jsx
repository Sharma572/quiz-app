import React from 'react'
import tiems from '../asserts/timesUp.gif'

const TimeUp = () => {
  return (
    <>
      <div className="timer-contanier">
        <img className='w-60 m-auto' src={tiems} alt="times up" />
        <h1 className='text-6xl text-center mt-5 font-bold text-white'>Times Up!</h1>
      </div>
    </>
  );
}

export default TimeUp