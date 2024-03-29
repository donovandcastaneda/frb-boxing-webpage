import axios from "axios";
import { useState } from "react";

export const AddEvents = () => {


  const [event, setEvent] = useState({
    name: "",
    desc: "",
    image: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);



  const handleChange = (e: { target: { name: any; value: any } }) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
  };


  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("https://frb-backend.onrender.com/events", event);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="form">
      <div className="flex items-center justify-center h-screen bg-dark-base">
        <form className="w-full max-w-xs">
        <h1 className="mb-6 text-3xl font-bold  text-center text-blue-500">
            Add Event
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
              Image:
            </label>
            <input
              id="image"
              type="file"
              name="image"
              required
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-neutral-content text-sm font-bold mb-2"
            >
              Date:
            </label>
            <input
              id="date"
              type="date"
              placeholder="date"
              name="date"
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-neutral-content text-sm font-bold mb-2"
            >
              Location:
            </label>
            <input
              id="location"
              type="text"
              placeholder="location"
              name="location"
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-content leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddEvents;
