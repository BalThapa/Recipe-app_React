import React from 'react';
import "./Cards.css";


const Cards = ({recipe}) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt="food" />
        </div>
    );
};

export default Cards;