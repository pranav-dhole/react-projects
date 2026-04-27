import { useState } from "react";
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
        setMeals(data?.meals);
        if (!data?.meals) {
          setErr("No Recipe Found For Your Dish :{");
        } else {
          setErr("");
        }
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

      <h3 className="err-msg">{err}</h3>
      {meals && (
        <div className="meals-grid">
          {meals.map((meal) => {
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
              const ingredient = meal[`strIngredient${i}`];
              const measure = meal[`strMeasure${i}`];

              if (ingredient && ingredient.trim() !== "") {
                ingredients.push({
                  name: ingredient,
                  measure: measure,
                });
              }
            }

            return (
              <div key={meal.idMeal}>
                <div className="card-container">
                  <img src={meal?.strMealThumb} className="meal-img" />
                  <div className="card-header">
                    <h3>{meal.strMeal}</h3>
                    <span className="region-tag">{meal.strArea}</span>
                  </div>

                  <div className="card-body">
                    <strong>Ingredients:</strong>
                    <ul>
                      {ingredients.map((item, index) => (
                        <li key={index}>
                          {item.measure} {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FoodRecipe;
