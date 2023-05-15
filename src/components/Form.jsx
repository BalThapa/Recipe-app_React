import React, { useState } from 'react';
import './Form.css';

const Form = ({submit, change, recipe}) => {
    const [numIngredients, setNumIngredients] = useState(1);
    
    return (
        <div>
            <div className='form-wrapper'>
                <h2>Add new Recipe</h2>
                <form onSubmit={submit} onChange={change} recipe={recipe} method="post">
                <div>
                    <label htmlFor="name" >Dish Name</label>
                    <input type="text" name="name" id='name' required/>
                </div>

                <div>
                    <label htmlFor="author" >Author</label>
                    <input type="text" name="author" id='author' required/>
                </div>

                <div>
                    <label htmlFor="origin" id="origin">Origin Country</label>
                    <select name="country" className='origin' id="origin" >
                        <option value="" invalid="true" hidden>Select a country </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="15" rows="5" required></textarea>
                </div>

                <div>
                    <label htmlFor="pic">Food pic</label>
                    <input type="url" id="pic" name="image" alt="pic" required/>
                </div>

                <div>
                    <label htmlFor="">Ingredients</label>
                    {[...Array(numIngredients)].map((_,index)=>(
                        <div className='ing' key={index}>
                        <div>
                                <label htmlFor={`quantity-${index}`}>Quantity</label>
                                <input type="text" name={`quantity-${index}`} id={`quantity-${index}`}/>
                            </div>
                            <div className='bkt'>
                                <label htmlFor={`ingredient-${index}`}>Ingredient</label>
                                <input type="text" name={`ingredient-${index}`} id={`ingredient-${index}`}/>
                            </div>
                    </div>   
                    ))}
                    
                    <button className='addMore'onClick={() => setNumIngredients(numIngredients+1)}>Add More</button>
                </div>
                
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea name="instruction" id="instructions" cols="15" rows="5" required></textarea>
                </div>

                <button type='submit' id='submit' name='submit' value='submit'>Post Recipe</button>
                </form>
            </div> 
            
        </div>
    );
};

export default Form;