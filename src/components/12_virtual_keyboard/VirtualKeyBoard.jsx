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
    } else if (keyvalue === "Caps Lock") {
      console.log("CAPS");
      let updatedCaps = !isCaps;
      setIsCaps(updatedCaps);

      let keys = document.querySelectorAll(".mykey");

      keys.forEach((key) => {
        let firstSpanElement = key.querySelector("span:first-child");

        if (firstSpanElement) {
          const keyText = firstSpanElement.innerText.toLowerCase();

          if (
            !["shift", "ctrl", "alt", "enter", "caps lock", "tab"].includes(
              keyText,
            )
          ) {
            firstSpanElement.innerText =
              (isCaps && isShift) || (!isCaps && !isShift)
                ? keyText.toUpperCase()
                : keyText.toLowerCase();
          }

          if (keyText === "caps lock") {
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
    }

    //

    // if (key === "Enter") {
    //   handleEnterKey();
    // } else if (key === " ") {
    //   handleSpaceKey();
    // } else if (key === "Caps Lock") {
    //   handleCapsLock();
    // } else if (key === '<i className="fa-solid fa-delete-left"></i>') {
    //   handleDeleteKey();
    // } else if (key === "Shift") {
    //   handleShiftKey();
    // } else if (key === "Tab") {
    //   handleTabKey();
    // } else {
    //   handleRegularKey(key);
    // }
  };

  return (
    <div className="virtual-keyboard-container">
      <h1>Virtual KeyBoard</h1>
      <textarea
        value={inputText}
        className="input-text"
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="main-keyboard">
        <div className="row">
          {firstRow.map((keyvalue) => (
            <div
              key={keyvalue}
              className="mykey"
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes(".") ? (
                keyvalue
                  .split(".")
                  .map((part, index) => <span key={index}>{part}</span>)
              ) : keyvalue === "Backspace" ? (
                <img src={backSpaceImg} />
              ) : (
                <span>{keyvalue}</span>
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
                keyvalue
                  .split("_")
                  .map((part, index) => <span key={index}>{part}</span>)
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
              className="mykey"
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes("_") ? (
                keyvalue
                  .split("_")
                  .map((part, index) => <span key={index}>{part}</span>)
              ) : (
                <span>{keyvalue}</span>
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {fourthRow.map((keyvalue) => (
            <div
              key={keyvalue}
              className="mykey"
              onClick={() => handleKeyClick(keyvalue)}
            >
              {keyvalue.includes("_") ? (
                keyvalue
                  .split("_")
                  .map((part, index) => <span key={index}>{part}</span>)
              ) : (
                <span>{keyvalue}</span>
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {fifthRow.map((keyvalue) => (
            <div
              key={keyvalue}
              className="mykey"
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
