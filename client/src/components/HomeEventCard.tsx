import { EventCardInterface } from "../types/Types";
import { Key, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import EventData from "../data/EventData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

export function HomeEventCards({
  title,
  imgUrl,
  date,
  description,
  location,
}: EventCardInterface) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(date);
      const timeLeft = Math.max(eventDate.getTime() - new Date().getTime(), 0);
      setTimeRemaining(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: -150,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: -800,
    },
  };

  // Get current date
  const currentDate = new Date();

  // Sort events by date
  const sortedEventData = [...EventData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div>
      <div className=" flex justify-center items-center">
       
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {sortedEventData.map((card) => {
          const eventDate = new Date(card.date);
          const isPastEvent = eventDate.getTime() < currentDate.getTime();
          const timeLeft = Math.max(
            eventDate.getTime() - currentDate.getTime(),
            0
          );
          const cardClass = isPastEvent ? "card-past" : "";
          return (
            <SwiperSlide key={card.id} className={cardClass}>
              <div className="card w-96 glass scale-[0.5]">
                <figure>
                  <img src={card.imgSrc} alt="photo" />
                </figure>
                <div className="card-body">
                  <title className="card-title">{card.title}</title>
                  <h2 className="">{card.location}</h2>
                  <h2 className="">{new Date(card.date).toDateString()}</h2>
                  <p className="max-w-[265px] break-words">
                    {card.description}
                  </p>
                  {isPastEvent ? (
                    <p>This event has passed.</p>
                  ) : (
                    <p>{formatTime(timeLeft)}</p>
                  )}
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
