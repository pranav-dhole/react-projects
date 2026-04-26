import { useEffect, useState } from "react";
import "./foodRecipe.css";

const FoodRecipe = () => {
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState("");

  const fetchMeals = async () => {
    if (inputValue) {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
        );
        const data = await res.json();
        console.log(data?.meals);
        setMeals(data?.meals);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="recipe-container">
      <h1>Find Your Food Recipe</h1>
      <div className="recipe-input-container">
        <input
          type="text"
          placeholder="Type Recipe Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={fetchMeals}>Search</button>
      </div>

      {meals && (
        <div>
          {meals.map((meal) => (
            <div>
              <p>{meal.strArea}</p>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodRecipe;
