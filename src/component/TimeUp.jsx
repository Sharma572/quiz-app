import React from 'react'
import tiems from '../asserts/times up.gif'

const TimeUp = () => {
  return (
    <>
      <div className="timer-contanier">
        <img src={tiems} alt="times up" />
      </div>
    </>
  );
}

export default TimeUp