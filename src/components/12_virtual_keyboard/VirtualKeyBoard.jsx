import "./virtualKeyBoard.css";
import { useState } from "react";
import {
  fifthRow,
  firstRow,
  fourthRow,
  secondRow,
  thirdRow,
} from "./keyboardChars";
import backSpaceImg from "./backspace.svg";

const VirtualKeyBoard = () => {
  const [inputText, setInputText] = useState("");
  const [isCaps, setIsCaps] = useState(false);
  const [isShift, setIsShift] = useState(false);

  const handleKeyClick = (keyvalue) => {
    if (keyvalue === "Enter") {
      let newContent = inputText + "\n";
      setInputText(newContent);
    } else if (keyvalue === " ") {
      let newContent = inputText + "\u00A0";
      setInputText(newContent);
    } else if (keyvalue === "Tab") {
      let newContent = inputText + "    ";
      setInputText(newContent);
    } else if (keyvalue === "Caps") {
      let updatedCaps = !isCaps;
      setIsCaps(updatedCaps);

      let keys = document.querySelectorAll(".mykey");

      keys.forEach((key) => {
        let firstSpanElement = key.querySelector("span:first-child");

        if (firstSpanElement) {
          const keyText = firstSpanElement.innerText.toLowerCase();

          if (
            !["shift", "ctrl", "alt", "enter", "caps", "tab"].includes(keyText)
          ) {
            firstSpanElement.innerText =
              (isCaps && isShift) || (!isCaps && !isShift)
                ? keyText.toUpperCase()
                : keyText.toLowerCase();
          }

          if (keyText === "caps") {
            firstSpanElement.parentElement.style.backgroundColor = updatedCaps
              ? "blue"
              : "black";
          }
        }
      });
    } else if (keyvalue === "Backspace") {
      if (inputText.length === 0) return;

      let newContent = inputText.slice(0, inputText.length - 1);
      setInputText(newContent);
    } else if (keyvalue === "Shift") {
      let updatedShift = !isShift;
      setIsShift(updatedShift);

      let keys = document.querySelectorAll(".mykey");

      keys.forEach((key) => {
        let firstSpanElement = key.querySelector("span:first-child");
        let secondSpanElement = key.querySelector("span:nth-child(2)");

        if (!firstSpanElement) return;

        let keyText = firstSpanElement.innerText.toLowerCase();

        if (keyText === "shift") {
          key.style.backgroundColor = updatedShift ? "blue" : "black";
          return;
        }

        if (secondSpanElement) {
          if (updatedShift) {
            firstSpanElement.style.display = "none";
            secondSpanElement.style.display = "block";
          } else {
            firstSpanElement.style.display = "block";
            secondSpanElement.style.display = "none";
          }
        } else if (!["caps", "tab", "alt", "ctrl", "enter"].includes(keyText)) {
          let shouldBeUpper = updatedShift !== isCaps;
          firstSpanElement.innerText = shouldBeUpper
            ? keyText.toUpperCase()
            : keyText.toLowerCase();
        }
      });
    } else {
      const isLetter = keyvalue.length === 1 && /[a-z]/i.test(keyvalue);

      let finalChar = keyvalue;

      if (isLetter) {
        const shouldBeUpper = isShift !== isCaps;
        finalChar = shouldBeUpper
          ? keyvalue.toUpperCase()
          : keyvalue.toLowerCase();
      } else if (keyvalue.includes(".") || keyvalue.includes("_")) {
        const delimiter = keyvalue.includes(".") ? "." : "_";
        const parts = keyvalue.split(delimiter);
        finalChar = isShift ? parts[0] : parts[1];
      }

      setInputText((prev) => prev + finalChar);
    }
  };

  return (
    <div className="virtual-keyboard-container">
      <h1>Virtual KeyBoard</h1>
      <textarea
        value={inputText}
        className="input-text"
        onChange={(e) => setInputText(e.target.value)}
      />

      <h3 className="screen-warning">Only available for big screen sizes</h3>

      <div className="main-keyboard">
        <div className="row">
          {firstRow.map((keyvalue) => (
            <div
              key={keyvalue}
              className={`mykey ${keyvalue === "Backspace" ? "backspace-key" : ""}`}
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes(".") ? (
                <span>
                  {isShift ? keyvalue.split(".")[0] : keyvalue.split(".")[1]}
                </span>
              ) : keyvalue === "Backspace" ? (
                <img src={backSpaceImg} />
              ) : (
                <span>
                  {isShift ? keyvalue.split(".")[0] : keyvalue.split(".")[1]}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="row">
          {secondRow.map((keyvalue) => (
            <div
              key={keyvalue}
              className="mykey"
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes("_") ? (
                <span>
                  {isShift ? keyvalue.split("_")[0] : keyvalue.split("_")[1]}
                </span>
              ) : (
                <span>{keyvalue}</span>
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {thirdRow.map((keyvalue) => (
            <div
              key={keyvalue}
              className={`mykey ${keyvalue === "Enter" ? "enter-key" : ""}`}
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes("_") ? (
                <span>
                  {isShift ? keyvalue.split("_")[0] : keyvalue.split("_")[1]}
                </span>
              ) : (
                <span>{keyvalue}</span>
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {fourthRow.map((keyvalue, i) => (
            <div
              key={keyvalue + i}
              className={`mykey ${keyvalue === "Shift" ? "shift-key" : ""}`}
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes("_") ? (
                <span>
                  {isShift ? keyvalue.split("_")[0] : keyvalue.split("_")[1]}
                </span>
              ) : (
                <span>{keyvalue}</span>
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {fifthRow.map((keyvalue, i) => (
            <div
              key={keyvalue + i}
              className={`mykey ${keyvalue === " " ? "space-key" : ""}`}
              onClick={() => handleKeyClick(keyvalue)}
            >
              {<span>{keyvalue}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyBoard;
