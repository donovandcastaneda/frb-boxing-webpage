import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { EventCard } from "../components/EventCards";
import { Link } from "react-router-dom";

type Event = {
  id: number;
  image: any;
  name: string;
  desc: string;
  date: Date;
  location: string;
};

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllCoaches = async () => {
      try {
        const res = await axios.get("http://localhost:8800/events");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCoaches();
  }, []);

  const handleDelete = async (id: string | number) => {
    try {
      await axios.delete(`http://localhost:8800/events/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pb-96">
      <div className="flex flex-col md: flex-rows items-center justify-center pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event.id}>
              <EventCard
                name={event.name}
                image={event.image}
                date={new Date(event.date)}
                desc={event.desc}
                location={event.location}
              />
              {auth.user && (
                <>
                  <div className="flex justify-end pr-8">
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                      Delete
                    </button>
                    <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md ml-2">
                      <Link to={`/UpdateEvents/${event.id}`}>Update</Link>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
