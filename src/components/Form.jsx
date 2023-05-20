import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './Form.css';

const Form = ({submit, change, recipe}) => {
    const [numIngredients, setNumIngredients] = useState(1);
    const [countryList, setCountryList]= useState([]);

    useEffect(()=>{
      
        axios.get('https://restcountries.com/v3.1/all')
          .then(res=>{setCountryList(res.data.map((country) => {return(country.name.common)}))
          });

      },[])
    
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
                    <select name="country" className='origin' >
                    <option value="select" className='option'>Select</option>
                     {countryList.map(country=>{return(<option key={country} value={country}> {country} </option>)})}   
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
                                <input type="text" name={`quantity-${index}`} id={`quantity-${index}`} required/>
                            </div>
                            <div className='bkt'>
                                <label htmlFor={`ingredient-${index}`}>Ingredient</label>
                                <input type="text" name={`ingredient-${index}`} id={`ingredient-${index}`} required/>
                            </div>
                    </div>   
                    ))}
                    
                    <button className='addMore' onClick={() => setNumIngredients(numIngredients+1)}>Add More</button>
                </div>
                
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea name="instruction" id="instructions" cols="15" rows="5" required></textarea>
                </div>

                <button type='submit' id='submit' name='submit' value='submit'onClick={() => setNumIngredients(1)}>Post Recipe</button>
                </form>
            </div> 
            
        </div>
    );
};

export default Form;