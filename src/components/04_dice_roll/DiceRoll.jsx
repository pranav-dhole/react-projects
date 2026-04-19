import "./diceRoll.css";
import { useState } from "react";

import dice1 from "../../assets/04_dice_images/dice_01.png";
import dice2 from "../../assets/04_dice_images/dice_02.png";
import dice3 from "../../assets/04_dice_images/dice_03.png";
import dice4 from "../../assets/04_dice_images/dice_04.png";
import dice5 from "../../assets/04_dice_images/dice_05.png";
import dice6 from "../../assets/04_dice_images/dice_06.png";

const DICE_IMAGES = [dice1, dice2, dice3, dice4, dice5, dice6];

const DiceRoll = () => {
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(0);

  const rollDice = () => {
    let random1 = Math.floor(Math.random() * DICE_IMAGES.length);
    let random2 = Math.floor(Math.random() * DICE_IMAGES.length);

    setDiceOne(random1);
    setDiceTwo(random2);
  };

  return (
    <div>
      <div className="dice-container">
        <div className="img-container">
          <img
            alt={`dice ${diceOne + 1}`}
            src={DICE_IMAGES[diceOne]}
            title={diceOne + 1}
          />
          <img
            alt={`dice ${diceTwo + 1}`}
            src={DICE_IMAGES[diceTwo]}
            title={diceTwo + 1}
          />
        </div>
        <button className="roll-btn" onClick={rollDice} title="click to roll">
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default DiceRoll;
