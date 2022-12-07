import React from 'react'
import { useNavigate } from "react-router-dom";

const ShowAnswer = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <>
      <div>ShowAnswer</div>
      <button onClick={routeChange}>Show Result</button>
      
    </>
  );
}

export default ShowAnswer