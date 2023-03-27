import React from "react";
import { EventCardInterface } from "../types/Types";

export function EventCard({
  title,
  imgUrl,
  date,
  description,
  location,
}: EventCardInterface) {










  
  return (
    <div className="pb-96">
      <div className="p-5">
        <div className="card glass lg:card-side bg-base-100 shadow-xl ">
          <figure className="">
            <img
              src={imgUrl}
              alt="Event"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <h2 className="">{location}</h2>
            <h2 className="">{date.toDateString()}</h2>
            <p className="max-w-[250px] break-words">{description}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
