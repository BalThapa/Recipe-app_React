import React from 'react';
import './AddYourOwn.css';

const AddYourOwn = () => {
    return (
        <div>
            <div className='form'>
                <h2>Add new Recipe</h2>
                <form >
                <div>
                    <label htmlFor="name" >Dish Name</label>
                    <input type="text" name="name" id='name'/>
                </div>

                <div>
                    <label htmlFor="author" >Author</label>
                    <input type="text" name="author" id='author' />
                </div>

                <div>
                    <label htmlFor="origin" id="origin">Origin Country</label>
                    <select name="origin" className='origin' id="origin">
                        <option value="" invalid="true" hidden>Select a country </option>
                    </select>
                </div>

                <div>
                    <label htmlFor="pic">Food pic</label>
                    <input type="url" id="pic" name="pic" alt="pic" />
                </div>

                <div>
                    <label htmlFor="">Ingredients</label>
                    <div className='ing'>
                        <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input type="text" name="quantity" id="quantity" />
                            </div>
                            <div>
                                <label htmlFor="ingredient">Ingredient</label>
                                <input type="text" name="ingredient" id="ingredient" />
                            </div>
                    </div>   
                    <button className='addMore'>Add More</button>
                </div>
                
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea name="instructions" id="instructions" cols="15" rows="5"></textarea>
                </div>

                <button type='submit' id='submit'>Post Recipe</button>
                </form>
            </div> 
            
        </div>
    );
};

export default AddYourOwn;