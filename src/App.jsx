import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address");
    } else if (email === " ") {
      setError("Whoops! It looks like you forgot to add your email");
    } else {
      console.log("Form submitted with email:", email);
    }
  };
  return (
    <section className="p-10">
      <img src="./src/assets/logo.svg" alt="logo" className="mx-auto mt-10" />
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-2xl md:text-4xl text-gray-500">
          We are launching{" "}
          <span className="text-slate-950 font-bold">soon!</span>
        </h1>
        <p className="text-slate-800 text-lg md:text-xl mt-3">
          Subscribe and get notified
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5">
        <form>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-80 text-gray-400 border ${
              error ? "border-red-500 mt-10" : "border-blue-200 mt-5"
            } py-3 px-5 mr-3 rounded-3xl focus:outline-blue-500`}
          />

          {error && <p className="text-red-500 text-sm ml-3 ">{error}</p>}
        </form>
        <button
          type="sumbit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-400 w-80 md:w-45 text-white p-3 mt-3 md:mt-5 rounded-3xl shadow-md shadow-blue-500/50"
        >
          Notify Me
        </button>
      </div>
      <img
        src="./src/assets/illustration-dashboard.png"
        alt="dashboard"
        className="mx-auto mt-10"
      />
      <div className="flex justify-center items-center mt-15 gap-3">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="w-4 h-3 text-blue-500 hover:bg-blue-500 hover:text-white border border-gray-300 rounded-3xl p-1"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="w-4 h-3 text-blue-500 hover:bg-blue-500 hover:text-white border border-gray-300 rounded-3xl p-1"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-4 h-3 text-blue-500 hover:bg-blue-500 hover:text-white border border-gray-300 rounded-3xl p-1"
        />
      </div>
      <p className="text-gray-300 text-center mt-5">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </section>
  );
};

export default App;
