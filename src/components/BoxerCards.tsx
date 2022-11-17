import React from "react";

export function BoxerCard(name: string, imgUrl: any, age: number, status: string ) {
  return (
   <div>
    <img
    src = {imgUrl}
    alt = "Boxer"
    className="w-full h-36 md:h-48 object-cover cursor-pointer"
    />
    <div className="w-full p-4">
      <h1 className="text-lg md:text-xl mb-2 md:mb-3 ">{name}</h1>
      <h2>{age}</h2>
      <h3>{status}</h3>
    </div>
   </div>
  );
};
