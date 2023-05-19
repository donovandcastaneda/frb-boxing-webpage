import axios from "axios";
import { useState } from "react";

export const AddBoxers = () => {
  const [boxer, setBoxer] = useState({
    name: "",
    age: "",
    desc: "",
    image: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setBoxer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error,setError] = useState(false)


  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/boxers", boxer);
      window.location.reload()
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };
  return (
    <div className="form">
      <div className="flex items-center justify-center h-screen bg-dark-base">
        <form className="w-full max-w-xs">
          <h1 className="mb-6 text-3xl font-bold text-primary text-center">
            Add Boxer
          </h1>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-neutral-content text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-neutral-content text-sm font-bold mb-2"
            >
              Age:
            </label>
            <input
              id="age"
              type="number"
              placeholder="age"
              name="age"
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-neutral-content text-sm font-bold mb-2"
            >
              Description:
            </label>
            <input
              id="desc"
              type="text"
              placeholder="desc"
              name="desc"
              required
              onChange={handleChange}

              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-neutral-content text-sm font-bold mb-2"
            >
              Image URL:
            </label>
            <input
              id="image"
              type="text"
              placeholder="image"
              name="image"
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>

        </form>
      </div>
    </div>
  );
};
export default AddBoxers;
