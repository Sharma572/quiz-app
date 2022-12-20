import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const API = "https://my-json-server.typicode.com/Sharma572/rest_api/questions";

const ShowAnswer = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/quiz`;
    navigate(path);
  };
  
   const getData = async () => {
     try {
       const result = await axios.get(API);
       const questions = await result.data;
       console.log(questions);

     } catch (error) {
       console.log(error);
     }
   };
   useEffect(() => {
     getData();
     console.log("work");
   }, []);

  return (
    <>
      <div>ShowAnswer</div>
      <button onClick={routeChange}>Show Result</button>
      
    </>
  );
}

export default ShowAnswer