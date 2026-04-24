import { useState } from "react";
import "./bmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const calBMI = () => {
    if ((!weight && !height) || height <= 0) return;
    if (!Number(weight) || !Number(height)) return;
    setIsLoading(true);
    let meterSquare = height / 100;

    let calculatedBMI = (weight / meterSquare ** 2).toFixed(2);
    console.log(calculatedBMI);

    if (calculatedBMI < 18.5) {
      setStatus("UnderWeight, Please Feed Yourself 😟");
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
      setStatus("Normal Healthy Weight, Uhm! Pretty Good 😇");
    } else if (calculatedBMI >= 25.0 && calculatedBMI <= 29.9) {
      setStatus("Overweight, Ugh! You May Get Health Issues in Future 🥺");
    } else {
      setStatus("Obese, Nah Man! You Are Very Unhealthy 😨");
    }

    setBMI(calculatedBMI);

    setIsLoading(false);
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-box">
        <label>Weight (KG)</label>
        <input
          type="text"
          placeholder="Your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label>Height (CM)</label>
        <input
          type="text"
          placeholder="Your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calBMI}>
        {isLoading ? "Calculating..." : "Calculate"}
      </button>
      <div>
        <h3>
          Your BMI: <span>{BMI}</span>
        </h3>
        <h3>
          Status: <span>{status}</span>
        </h3>
      </div>
    </div>
  );
};

export default BmiCalculator;
