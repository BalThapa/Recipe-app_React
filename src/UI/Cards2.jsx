import React from 'react';
import "./Cards.css";


const Cards2 = (dummyRecipe) => {

    return (
        <div className='Bonus-recipes'>
          <h2>Bonus Recipes</h2>
            <div className='card2'>
              <img src={dummyRecipe.image} alt={dummyRecipe.name} />
              <div className='card2Des'>
              <h3>{dummyRecipe.name}</h3>
              <p><strong>Cusine: </strong> {dummyRecipe.cuisine}</p>
              <p><strong>MealType:</strong> {dummyRecipe.mealType}</p>
              <p><strong>Preparation Time:</strong> {dummyRecipe.prepTimeMinutes}mins</p>
              <p><strong>Rating:</strong> {dummyRecipe.rating}</p>
              <p><strong>Calories per Servings:</strong> {dummyRecipe.caloriesPerServing}</p>
              </div>
              <div className='card2Ing'>
              <h4>Ingredients:</h4>
              <ul>
                {dummyRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
              </div>
              <div className='card2Ins'>
              <h4>Instructions:</h4>
              <p>{dummyRecipe.instructions}</p>
              </div>
            </div>
            
        </div>

    );
};

export default Cards2;