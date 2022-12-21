// import React, { useEffect, useState } from "react";
// import TimeUp from "./TimeUp";

// export default function Timer() {
//   const [time, setTime] = useState(700);

//   useEffect(() => {
//     let timer = setInterval(() => {
//       setTime((time) => {
//         if (time === 0) {

//           clearInterval(timer);
//           return 0;
//         } else return time - 1;
//       });
//     }, 3500);
//   }, []);
//   console.log(time);
  
//   return (
//     <div className="App">
//       {time <= 0 ? (
//         <TimeUp />
//       ) : (
//         <p
//           className={` bg-white p-2 w-40  ${time} < 590
//               ? "text-red-500"
//               : ${time} > 600
//               ? "text-green-900"
//               : ${time} < 600 && time > 300
//               ? "text-black-500"
//               : "text-black-900"
//          `}
//         >
//           Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
//           {`${time % 60}`.padStart(2, 0)}
//         </p>
//       )}
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import TimeUp from "./TimeUp";
const Timer = (props) => {
  console.log(props);
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 1200);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
     props.timerData(timer)
    })
  })

  return (
    <>
      {
      timer === "00:00:01" ? (
        <TimeUp />
      ):(
      <h2 className={timer > "00:05:00" ? "text-white" : "text-red-500"}>
        {timer.slice(3)}
      </h2>
      )
      
      }
    </>
  );
};
export default Timer;