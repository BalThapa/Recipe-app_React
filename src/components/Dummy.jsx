import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards2 from '../UI/Cards2';
import './Dummy.css';

const Dummy = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);    
    const[searchInput, setSearchInput]=useState("");


    useEffect(()=>{
        setIsLoading(true);
        axios.get("https://dummyjson.com/recipes")
        .then(res=>{setData(res.data.recipes)})
        setIsLoading(false)
     }, [])

     const searchInputHandler = (e) => {
        setSearchInput(e.target.value)
      }
    
      const searchFilter = data.filter(item => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
      })

     if (isLoading){
         <div>Loading...</div>;
     }

    return (
        <div >
            <div className='search'>
                <input onChange={searchInputHandler} placeholder='Search for bonus-recipe:'/>
            </div>
            <div className={'dummy'}>
            {searchFilter.map((recipe,index)=>
            <Cards2
            key={index}
            dummyRecipe={recipe}
            
           />
            )} 
            </div>
        </div>
    );
};

export default Dummy;