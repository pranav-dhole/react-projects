import { useState } from "react";
import "./guessTheNumber.css";

const randomNum = Math.floor(Math.random() * 20) + 1;
const GuessTheNumber = () => {
  const [decisionText, setDecisionText] = useState("");

  const checkNumber = (val) => {
    if (val) {
      if (val < 1 || val > 20) {
        setDecisionText("Value is way too low OR high");
      } else if (val > randomNum) {
        setDecisionText("Higher !");
      } else if (val < randomNum) {
        setDecisionText("Lower !");
      } else {
        setDecisionText("Yippee, Correct");
      }
    } else {
      setDecisionText("");
    }
  };

  return (
    <div className="guessNum-container">
      <div className="guessInner-container">
        <h1>Guess the number between 1 to 20</h1>
        <input
          type="number"
          placeholder="Type Your Number Between 1 to 20"
          onChange={(e) => checkNumber(e.target.value)}
        />
        <p>
          <strong>
            You Guessed: <span className="decision">{decisionText}</span>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default GuessTheNumber;
