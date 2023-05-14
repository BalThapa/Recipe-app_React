import React, { useState, useEffect } from 'react';
import Cards from "../UI/Cards";
import './RecipeList.css'
import axios from 'axios';

const RecipeList = () => {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]=useState(false);
     const[searchInput, setSearchInput]=useState("");
     console.log(data);
     useEffect (()=>{
        setIsLoading(true);
        axios.get("http://localhost:4001/recipes")
        .then(res=>{setData(res.data)})
        setIsLoading(false)
     },[]);
    const searchInputHandler = (e) => {
        setSearchInput(e.target.value)
      }
    
      const searchFilter = data.filter(item => {
        return item.name.includes(searchInput)
      })
    if (isLoading){
        <p>...Loading...</p>
    }
    return (
        
        <div>
            <div className='search'>
                <label htmlFor='search'>Search for recipe:</label>
                <input onChange={searchInputHandler} />
                <h1>Our recipes</h1>
            </div>
            <div className={'cards'}>
                {searchFilter.map((data) => (
                <Cards
                key={data.id}
                recipe={data}
                />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;