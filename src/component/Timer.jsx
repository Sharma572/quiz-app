import React, { useEffect, useState } from "react";
import TimeUp from "./TimeUp";

export default function Timer() {
  const [time, setTime] = useState(100);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="App">
      {time <= 0 ? (
        <TimeUp />
      ) : (
        <p
          className={
            time < 590
              ? "text-red-500"
              : time > 600
              ? "text-green-900"
              : time < 600 && time > 300
              ? "text-black-500"
              : "text-black-900"
          }
        >
          Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
          {`${time % 60}`.padStart(2, 0)}
        </p>
      )}
    </div>
  );
}
