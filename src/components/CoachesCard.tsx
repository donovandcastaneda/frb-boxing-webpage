import React from "react";
import { CoachCardInterface } from "../data/Types";

export function CoachCard({name,imgUrl,title}:CoachCardInterface) {
  return (
    <div className="card w-96 glass m-12">
    <figure><img src= {imgUrl} alt="coach"/></figure>
    <div className="card-body">
      <h1 className="card-title flex-col">{name}</h1>
      <div className="card-actions justify-end">
      <button className="btn gap-2">{title}</button>     
      </div>
    </div>
  </div>
  );
};