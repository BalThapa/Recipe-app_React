import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards2 from '../UI/Cards2';
import './Dummy.css';

const Dummy = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get("https://dummyjson.com/recipes")
        .then(res=>{setData(res.data.recipes)})
        setIsLoading(false)
     }, [])

     if (isLoading){
         <div>Loading...</div>;
     }

    return (
        <div className={'dummy'}>
            {data.map((recipe,index)=>
            <Cards2
            key={index}
            dummyRecipe={recipe}
            
           />
            )} 
        </div>
    );
};

export default Dummy;