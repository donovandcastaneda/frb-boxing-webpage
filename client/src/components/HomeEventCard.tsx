import { EventCardInterface } from "../types/Types";
import { Key, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

type HomeEventCards = {
  id: number;
  image: any;
  name: string;
  desc: string;
  date: Date;
  location: string;
};

SwiperCore.use([Navigation, Pagination]);

export function HomeEventCards() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const [eventsData, setEventsData] = useState<HomeEventCards[]>([]);

  useEffect(() => {
    // fetch events from your server
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://frb-backend.onrender.com/events");
        setEventsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date();
      const timeLeft = Math.max(eventDate.getTime() - new Date().getTime(), 0);
      setTimeRemaining(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [Date]);

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
  const sortedEventData = [...eventsData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div>
      <div className=" flex justify-center items-center"></div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {sortedEventData.map((event) => {
          const eventDate = new Date(event.date);
          const isPastEvent = eventDate.getTime() < currentDate.getTime();
          const timeLeft = Math.max(
            eventDate.getTime() - currentDate.getTime(),
            0
          );
          const cardClass = isPastEvent ? "card-past" : "";
          return (
            <SwiperSlide key={event.id} className={cardClass}>
              <div className="card w-96 glass scale-[0.5]">
                <figure>
                  <img src={event.image} alt="photo" />{" "}
                  {/* Assuming the image URL is stored in the `image` property */}
                </figure>
                <div className="card-body">
                  <h1 className="card-title">{event.name}</h1>{" "}
                  {/* Assuming the title is stored in the `name` property */}
                  <h2 className="">{event.location}</h2>
                  <h2 className="">{new Date(event.date).toDateString()}</h2>
                  <p className="max-w-[265px] break-words">
                    {event.desc}{" "}
                    {/* Assuming the description is stored in the `desc` property */}
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
