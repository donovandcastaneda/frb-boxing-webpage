import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { EventCard } from "../components/EventCards";
import { AuthContext } from "../context/AuthContext";
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
  const [selectedEvents, setSelectedEvents] = useState<number[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/events");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllEvents();
  }, []);

  const handleSingleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/events/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleMultipleDelete = async () => {
    try {
      for (const id of selectedEvents) {
        await axios.delete(`http://localhost:8800/events/${id}`);
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedEvents([...selectedEvents, id]);
    } else {
      setSelectedEvents(selectedEvents.filter((eventId) => eventId !== id));
    }
  };

  return (
    <div className="relative pb-96">
      <div className="flex flex-col md:flex-row items-center justify-center pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event.id}>
              <EventCard
                name={event.name}
                image={`http://localhost:8800/images/` + event.image}
                date={new Date(event.date)}
                desc={event.desc}
                location={event.location}
              />
              {auth.user && (
                <>
                  <div className="flex justify-end pr-8">
                    <input
                      type="checkbox"
                      style={{ transform: "scale(1.5)", marginRight: "15px" }}
                      onChange={(e) =>
                        handleCheckboxChange(event.id, e.target.checked)
                      }
                    />
                    <button
                      onClick={() => handleSingleDelete(event.id)}
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
      {auth.user && selectedEvents.length > 0 && (
        <button
          onClick={handleMultipleDelete}
          className="absolute bottom-1 left-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-4"
        >
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default Events;
