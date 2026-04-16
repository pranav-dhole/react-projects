import { useRef, useState } from "react";
import "./joke.css";
const Joke = () => {
  const [joke, setJoke] = useState("");
  const [isActive, setActive] = useState(false);

  const fetchJoke = async () => {
    try {
      setActive(true);
      const res = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single",
      );
      const data = await res.json();
      setJoke(data?.joke);
    } catch (e) {
      console.log(e.message);
    } finally {
      setActive(false);
    }
  };

  return (
    <div className="joke-container">
      <h1>Joke Generator Using React and Joke API</h1>
      <button
        className={`btn ${isActive ? "process" : ""}`}
        onClick={fetchJoke}
      >
        Click to generate a joke
      </button>
      <p className="joke">{joke || "JOKE COMES HERE..."}</p>
    </div>
  );
};

export default Joke;
