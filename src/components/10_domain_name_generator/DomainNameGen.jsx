import { useEffect, useState } from "react";
import "./domainNameGen.css";
import namer from "@rstacruz/startup-name-generator";

const DomainNameGen = () => {
  const [inputValue, setInputValue] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (inputValue.trim()) {
        let nameArr = namer(inputValue.split(" ").join(""));
        let lowerCaseArr = nameArr.map((n) => n.toLowerCase());
        setNames(lowerCaseArr.slice(0, 40));
      } else {
        setNames([]);
      }
    }, 300);

    return () => clearTimeout(timeOutId);
  }, [inputValue]);

  return (
    <div className="domain-container">
      <h1>Just Name It!</h1>
      <input
        type="text"
        id="domain-input"
        placeholder="Type Domain Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {names && (
        <div className="domain-name-container">
          {names?.map((n, i) => (
            <a
              href={`https://www.namecheap.com/domains/registration/results/?domain=${n}`}
              key={`${n + i}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{n}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DomainNameGen;
