import React from "react";

export function CoachCards(name: string, imgUrl: any, title: string) {
  return (
    <div>
      <img
        src={imgUrl}
        alt="Coach"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h1 className="text-lg md:text-xl mb-2 md:mb-3 ">{name}</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
