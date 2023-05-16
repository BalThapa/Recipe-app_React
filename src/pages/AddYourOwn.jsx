import React, { useState } from 'react';
import axios from 'axios';
import Form from "../components/Form" 


const AddYourOwn = () => {
    
    const [recipe, setRecipe]=useState({
        name:"",
        author:"",
        country:"",
        description:"",
        image:"",
        ingredients:[
            {
                "quantity": "",
                "ingredient": ""
              }
        ],
        instruction:""
    });

    const addRecipeHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/recipes", recipe)
        .then(res => {console.log(res.data)})
        .catch(error => {console.log(error)})
        setRecipe({recipe})
        e.target.reset ();
    }

    const changeRecipeHandler = (e) => {
        setRecipe ({...recipe, [e.target.name]:e.target.value});
    }

   
    return (
        <div>
            <Form 
            submit= {addRecipeHandler}
            change= {changeRecipeHandler}
            recipe= {recipe}
            />
        </div>
    );
};

export default AddYourOwn;