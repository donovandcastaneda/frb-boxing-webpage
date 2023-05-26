import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CoachCard } from "../components/CoachesCard";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

type Coach = {
  id: number;
  image: any;
  name: string;
  desc: string;
};

export const Coaches = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [selectedCoaches, setSelectedCoaches] = useState<number[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllCoaches = async () => {
      try {
        const res = await axios.get("http://localhost:8800/coaches");
        setCoaches(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCoaches();
  }, []);

  const handleMultipleDelete = async () => {
    try {
      for (const id of selectedCoaches) {
        await axios.delete(`http://localhost:8800/coaches/${id}`);
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSingleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/coaches/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCoaches([...selectedCoaches, id]);
    } else {
      setSelectedCoaches(selectedCoaches.filter((coachId) => coachId !== id));
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaches.map((coach) => (
          <div key={coach.id}>
            <CoachCard
              image={`http://localhost:8800/images/` + coach.image}
              name={coach.name}
              desc={coach.desc}
            />
            {auth.user && (
              <>
                <div className="flex justify-end pr-6">
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", marginRight: "15px" }}
                    onChange={(e) =>
                      handleCheckboxChange(coach.id, e.target.checked)
                    }
                  />
                  <button
                    onClick={() => handleSingleDelete(coach.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Delete
                  </button>
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md ml-2">
                    <Link to={`/UpdateCoaches/${coach.id}`}>Update</Link>
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {auth.user && selectedCoaches.length > 0 && (
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

export default Coaches;
