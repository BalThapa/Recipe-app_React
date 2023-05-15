import React from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";


const Cards = ({recipe}) => {
    return (
        <div>
            <img src={recipe.image} alt="{recipe.name}" />
            <h2>{recipe.name}</h2>
            <Link to={`/recipe/${recipe.id}`}>More Info</Link>
        </div>
    );
};

export default Cards;