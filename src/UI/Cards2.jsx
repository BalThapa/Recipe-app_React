import React from 'react';
import './Cards.css'

const Cards2 = ({dummyRecipe}) => {
    return (
        <div className='card2'>
            <div className='intro2'>
                <img src={dummyRecipe.image} alt={dummyRecipe.name} />
                <h3>{dummyRecipe.name}</h3>
              <div className='card2Des'> 
                <p><strong>Cusine: </strong> {dummyRecipe.cuisine}</p>
                <p><strong>MealType:</strong> {dummyRecipe.mealType}</p>
                <p><strong>Preparation Time:</strong> {dummyRecipe.prepTimeMinutes}mins</p>
                <p><strong>Rating:</strong> {dummyRecipe.rating}</p>
                <p><strong>Calories per Servings:</strong> {dummyRecipe.caloriesPerServing}</p>
              </div>
            </div>
            <div className='detail2'>
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