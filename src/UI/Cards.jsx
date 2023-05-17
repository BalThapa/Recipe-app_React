import React, { useEffect, useState}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Cards.css";


const Cards = ({recipe}) => {
const [flag, setFlag] = useState('');

    useEffect ( ()=>{
         
        axios.get(`https://restcountries.com/v3.1/name/${recipe.country}`)
        .then(response=>setFlag(response.data[0].flags.svg))
    },[recipe.country])
    

    return (
        <div className='card'>
            
            <div className='box'><img src={recipe.image} alt='recipe' /></div>
            <div className='box1'><img src={flag} alt='flag' /></div>

            <div className='detail'>
                <h3>Name: {recipe.name}</h3> 
                <p>Author: {recipe.author}</p>
                <Link to={`/recipeList/${recipe.id}`}><button >See more...</button></Link>
            </div>
        </div>
    );
};

export default Cards;