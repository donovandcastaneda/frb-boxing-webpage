import React, { useEffect, useState } from "react";
import { EventCardInterface } from "../types/Types";

export function EventCard({
  title,
  imgUrl,
  date,
  description,
  location,
}: EventCardInterface) {
  
  //create variable that holds the remaining time
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  // starts time interval that updates timeRemaining variables
  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = Math.max(
        new Date(date).getTime() - new Date().getTime(),
        0
      );
      setTimeRemaining(timeLeft);
    }, 1000);
    // clears the interval when the component unmounts
    return () => clearInterval(interval);
  }, [date]);

  // takes remaining timein milliseconds an converts it to days, hours, minutes, and seconds
  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // card section
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
            <h2 className="">{new Date(date).toDateString()}</h2>
            <p className="max-w-[250px] break-words">{description}</p>
            {timeRemaining === 0 ? (
              <p>The event has passed.</p>
            ) : (
              <p>{formatTime(timeRemaining)}</p>
            )}
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
