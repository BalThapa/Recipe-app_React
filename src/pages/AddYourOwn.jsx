import React, { useState } from 'react';
import axios from 'axios';
import Form from "../components/Form" 
import Modal from "../components/Modal";


const AddYourOwn = () => {
    
    const [recipe, setRecipe]=useState({
        id: null,
        name:"",
        author:"",
        country:"",
        description:"",
        image:"",
        ingredients:[
            {"quantity": "",
            "ingredient": ""},    
        ],
        instruction:""
    });

    const addRecipeHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/recipes", recipe)
        .then(res =>(res.data))
        .catch(error =>(error))
        setRecipe({recipe})
        e.target.reset ();

        alert("Recipe added!")
    }

    const moreRecipeHandler = (e) => {
        const {name,value} = e.target;

        if(name.includes('quantity') || name.includes('ingredient')){
            const [, i] = name.split("-");
            setRecipe((prevRecipe)=>{
                const updatedIngredients=[...prevRecipe.ingredients];
                updatedIngredients[i] ={...updatedIngredients[i],
                [name.includes('quantity-')? "quantity":"ingredient"]:value};
                return{...prevRecipe,ingredients:updatedIngredients};
            })
        }else {
            setRecipe ({...recipe, [e.target.name]:e.target.value});
        }
    }

    //const modalHandler = () => {

   // }

   
    return (
        <div>
            <Form 
            submit= {addRecipeHandler}
            change= {moreRecipeHandler}
            recipe= {recipe}
            />
            <Modal/>
        </div>
    );
};

export default AddYourOwn;