import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BoxerCard } from "../components/BoxerCards";
import { AuthContext } from "../context/AuthContext";

type Boxer = {
  id: number;
  image: any;
  name: string;
  age: any;
  desc: string;
};

export const Boxers = () => {
  const [boxers, setBoxers] = useState<Boxer[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllBoxers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/boxers");
        setBoxers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBoxers();
  }, []);

  const handleDelete = async (id: string | number) => {
    try {
      await axios.delete(`http://localhost:8800/boxers/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boxers.map((boxer) => (
          <div key={boxer.id}>
            <BoxerCard
              image={boxer.image}
              name={boxer.name}
              desc={boxer.desc}
              age={boxer.age}
            />
            {auth.user && (
              <button onClick={() => handleDelete(boxer.id)} className="delete">
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxers;
