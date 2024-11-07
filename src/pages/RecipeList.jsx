import React, { useState, useEffect } from 'react';
import Cards from "../UI/Cards";
import './RecipeList.css'
import axios from 'axios';

const RecipeList = () => {
    const [data, setData]= useState([]); 
    const [isLoading, setIsLoading]=useState(false);
    const[searchInput, setSearchInput]=useState("");
    
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
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
      })
    if (isLoading){
        <p>...Loading...</p>
    }

    const deleteRecipe = (id)=> {
       axios.delete(`http://localhost:4001/recipes/${id}`)
       .then(()=>{
        //Removing the deleted recive from state
        setData(data.filter(recipe => recipe.id !== id));
        alert("You succesfully deleted the Recipe")
       })
};

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
                onDelete = {()=> deleteRecipe(data.id)}
                />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;