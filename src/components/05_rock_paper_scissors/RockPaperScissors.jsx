import "./rockPaperScissors.css";
import rock from "../../assets/05_rps/rock.png";
import paper from "../../assets/05_rps/paper.png";
import scissors from "../../assets/05_rps/scissors.png";
import { useState } from "react";

let CHOICES = ["ROCK", "PAPER", "SCISSORS"];

const RockPaperScissors = () => {
  const [choice, setChoice] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [yourScore, setYourScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handlePcChoice = (myChoice) => {
    let randomPcChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setChoice(myChoice);
    setPcChoice(randomPcChoice);

    const winCondition = {
      ROCK: "SCISSORS",
      PAPER: "ROCK",
      SCISSORS: "PAPER",
    };

    if (myChoice === randomPcChoice) return;

    if (winCondition[myChoice] === randomPcChoice) {
      setYourScore((prev) => prev + 1);
    } else {
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <div className="rps-container">
      <h1 className="rps-header">Welcome to Rock, Paper, Scissors Game</h1>
      <div className="rps-img-container">
        <button onClick={() => handlePcChoice("ROCK")}>
          <img src={rock} alt="rock" title="rock" />
          Rock
        </button>
        <button onClick={() => handlePcChoice("PAPER")}>
          <img src={paper} alt="paper" title="paper" />
          Paper
        </button>
        <button onClick={() => handlePcChoice("SCISSORS")}>
          <img src={scissors} alt="scissors" title="scissors" />
          Scissors
        </button>
      </div>
      <h4>
        Your Choice: <span className="your-choice">{choice}</span>
      </h4>
      <h4>
        Computer's Choice: <span className="computer-choice">{pcChoice}</span>
      </h4>
      <h2>
        Your Score: <span className="your-score">{yourScore}</span>
      </h2>
      <h2>
        Computer Score: <span className="computer-score">{computerScore}</span>
      </h2>
    </div>
  );
};

export default RockPaperScissors;
