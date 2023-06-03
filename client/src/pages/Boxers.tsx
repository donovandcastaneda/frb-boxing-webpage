import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BoxerCard } from "../components/BoxerCards";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

type Boxer = {
  _id: any;
  image: any;
  name: string;
  age: any;
  desc: string;
};

export const Boxers = () => {
  const [boxers, setBoxers] = useState<Boxer[]>([]);
  const [selectedBoxers, setSelectedBoxers] = useState<number[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllBoxers = async () => {
      try {
        const res = await axios.get("https://frb-backend.onrender.com/boxers");
        setBoxers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBoxers();
  }, []);

  const handleMultipleDelete = async () => {
    try {
      for (const _id of selectedBoxers) {
        await axios.delete(`https://frb-backend.onrender.com/boxers/${_id}`);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingleDelete = async (_id: any) => {
    try {
      await axios.delete(`https://frb-backend.onrender.com/boxers/${_id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckboxChange = (_id: any, isChecked: boolean) => {
    if (isChecked) {
      setSelectedBoxers([...selectedBoxers, _id]);
    } else {
      setSelectedBoxers(selectedBoxers.filter((boxerId) => boxerId !== _id));
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boxers.map((boxer) => (
          <div key={boxer._id}>
            <BoxerCard
              image={`https://frb-backend.onrender.com/images/` + boxer.image}
              name={boxer.name}
              desc={boxer.desc}
              age={boxer.age}
            />
            {auth.user && (
              <>
                <div className="flex justify-end pr-6">
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", marginRight: "15px" }}
                    onChange={(e) =>
                      handleCheckboxChange(boxer._id, e.target.checked)
                    }
                  />
                  <button
                    onClick={() => handleSingleDelete(boxer._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Delete
                  </button>
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md ml-2">
                    <Link to={`/UpdateBoxers/${boxer._id}`}>Update</Link>
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {auth.user && selectedBoxers.length > 0 && (
        <button
          onClick = {handleMultipleDelete}
          className="absolute bottom-1 left-10  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-4 "
        >
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default Boxers;
