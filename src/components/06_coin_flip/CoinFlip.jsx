import "./coinFlip.css";
import heads from "../../assets/06_coin_flip/heads.png";
import tails from "../../assets/06_coin_flip/tails.png";
import { useState } from "react";

let FLIP_SIDES = [heads, tails];
const CoinFlip = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [coinSide, setCoinSide] = useState(heads);
  const totalFlips = headsCount + tailsCount;

  const handleCoinFlip = () => {
    // if (isFlipping) return;
    setIsFlipping(true);

    let randomFlip = FLIP_SIDES[Math.floor(Math.random() * FLIP_SIDES.length)];

    setTimeout(() => {
      setCoinSide(randomFlip);
      if (randomFlip === tails) {
        setTailsCount((p) => p + 1);
      } else {
        setHeadsCount((p) => p + 1);
      }
      setIsFlipping(false);
    }, 500);
  };

  return (
    <div className="coin-container">
      <h1>Flip The Coin</h1>
      <img className="coin-img" src={coinSide} alt="coin image" />
      <button
        onClick={handleCoinFlip}
        className={`${isFlipping ? "flipping" : ""}`}
        disabled={isFlipping}
      >
        {isFlipping ? "Flipping..." : "Flip Me!"}
      </button>
      <p>
        Out of <span>{totalFlips}</span> flips, there have been{" "}
        <span>{headsCount}</span> heads and <span>{tailsCount}</span> tails.
      </p>
    </div>
  );
};

export default CoinFlip;
