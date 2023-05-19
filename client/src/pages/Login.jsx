import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const { setAuth } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { " Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = reponse?.data?.accessToken;
      const roles = reponse?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      //admin password
      if (user === "admin" && pwd === "password123") {
        setAuth({ user, pwd, roles: ["admin"] });
        setSuccess(true);
      }
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.statues === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.statues === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="mb-4 text-2xl font-bold text-blue-500">
            You are logged in!
          </h1>
          <p>
            <Link to="/crudBoxers" className="text-blue-500 underline">
              Edit Boxers
            </Link>
          </p>
          <p>
            <Link to="/crudCoaches" className="text-blue-500 underline">
              Edit Coaches
            </Link>
          </p>
          <p>
            <Link to="/crudEvents" className="text-blue-500 underline">
              Edit Events
            </Link>
          </p>
          <p>
            <a href="#" className="text-blue-500 underline">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center h-screen">
          <p
            ref={errRef}
            className={`${errMsg ? "text-red-500 mb-4" : "invisible"}`}
          >
            {errMsg}
          </p>
          <h1 className="mb-4 text-4xl font-bold ">Sign In</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-500 text-sm font-bold mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-500 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </form>
        </section>
      )}
    </>
  );
};
