import { useState } from "react";
import "./password.css";
import validator from "validator";

const PasswordStrength = () => {
  const [isStrong, setIsStrong] = useState(null);
  const [password, setPassword] = useState("");

  const isPassStrong = async (e) => {
    try {
      setPassword(e.target.value);

      let pass = validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minSymbols: 1,
        minNumbers: 1,
      });

      if (pass) {
        setIsStrong(true);
      } else {
        setIsStrong(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Checking Password Strength in ReactJS</h1>
      <div>
        <label htmlFor="pass">Enter Password: </label>
        <input
          type="text"
          id="pass"
          placeholder="Jackma@1"
          value={password}
          onChange={(e) => isPassStrong(e)}
        />
        <p className={`${isStrong ? "is-strong" : "is-weak"} valid-para`}>
          {isStrong ? "It's Strong" : "It's NOT Strong"}
        </p>
      </div>
    </div>
  );
};

export default PasswordStrength;
