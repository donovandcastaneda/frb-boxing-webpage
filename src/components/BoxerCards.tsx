import React from "react";
import { BoxerCardInterface } from "../data/Types";

export function BoxerCard({name,imgUrl,age,status,}:BoxerCardInterface) {
  return (
    <div className="card w-96 glass m-12">
    <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/>{imgUrl}</figure>
    <div className="card-body">
      <h1 className="card-title flex-col">{name}</h1>
      <div className="card-actions justify-end">
      <button className="btn gap-2">age: {age}</button>     
      <button className="btn gap-2">{status}</button>     
   
      </div>
    </div>
  </div>
  );
};
