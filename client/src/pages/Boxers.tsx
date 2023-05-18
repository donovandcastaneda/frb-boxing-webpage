import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Boxers = () => {
  const [boxers, setBoxers] = useState([]);

  useEffect(() => {
    const fetchAllBoxers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/boxers");
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBoxers()
  },[]);

  return (
  <div>Boxers</div>
    )
  
};
export default Boxers;
