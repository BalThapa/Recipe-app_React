import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import axios from 'axios';


const Home = () => {
  const [data, setData]= useState(null);
  const [isLoading, setIsLoading]= useState(true);

  useEffect(()=>{
    axios.get("http://dummyjson.com/recipes")
    .then(response => {
      const randomRecipe = response.data.recipes[Math.floor(Math.random()*response.data.recipes.length)];
      setData(randomRecipe);
      setIsLoading(false);
    })
    
  },[])

  useEffect(() => {
    console.log(data);  // Logs the updated data
  }, [data]);
  

    return (
      <div>
        <div className='container'>
          <video autoPlay loop muted play-inline="true">
            <source src="https://media.istockphoto.com/id/1310585588/fi/video/raaka-munankeltuainen-putoaa-kasaan-jauhojen-valmistuskuoppaa-hidastettuna-yl%C3%A4puolella-n%C3%A4kym%C3%A4.mp4?s=mp4-640x640-is&k=20&c=-u4DXeavW8C1_ENOuu82V0xuVzouXI970CIjLage-Ww="/>
          </video>
          <div className='thoughts'>
            <h2>A recipe has no soul.</h2>
            <h2>You ,as the cook must bring soul to the recipe.</h2>
            <h2>-THOMAS KELLER</h2>
            <NavLink to="/recipeList"><button>Browse Recipes</button></NavLink>
          </div>
        </div>
        <div className='list'>
          <h2>Looking For the recipes?</h2></div>
          <section>
            <div className='bag'>
              <h3>Browse recipes</h3>
              <p>Find your favourites in this collection. You can search recipes based on name or country</p>
              <NavLink to="/recipeList" className="NavLink">All recipes</NavLink>
            </div>
            <div className='bag'>
              <h3>Add recipes</h3>
              <p>Recipes from your country is missing? No worries, add one!</p>
              <NavLink to="/recipeList" className="NavLink">Add recipes</NavLink>
            </div>
            <div className='bag'>
              <h3>How recipes comes to origin?</h3>
              <p>If you are a quite of a reader, do enjoy reading the history of the Recipe and find out who and how was the first recipe stored.</p>
              <NavLink to="https://www.thehumanexception.com/l/the-history-of-recipes/" className="NavLink">Mystery from the history</NavLink>
            </div>
          </section>
        <div className='special'>
          <h2>Today's Special</h2>
          {isLoading ?
           (<p>Loading...</p>
           ):(
            data && (
            <div className='bag2'>
              <img src={data.image} alt={data.name} />
              <div className='bg2Des'>
              <h3>{data.name}</h3>
              <p><strong>Cusine: </strong> {data.cuisine}</p>
              <p><strong>MealType:</strong> {data.mealType}</p>
              <p><strong>Preparation Time:</strong> {data.prepTimeMinutes}mins</p>
              <p><strong>Rating:</strong> {data.rating}</p>
              <p><strong>Calories per Servings:</strong> {data.caloriesPerServing}</p>
              </div>
              <div className='bg2Ing'>
              <h4>Ingredients:</h4>
              <ul>
                {data.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
              </div>
              <div className='bg2Ins'>
              <h4>Instructions:</h4>
              <p>{data.instructions}</p>
              </div>
            </div>
            ))}

          {/* <div className='bag2'>
            <img src="https://www.indianveggiedelight.com/wp-content/uploads/2020/04/coconutmilk_pulao.jpg" alt="random" />
              <h2>Coming Soon ...</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque reiciendis quidem adipisci quaerat sed, 
              ut obcaecati mollitia numquam perferendis dignissimos illum pariatur neque aut porro laudantium unde 
              aperiam blanditiis quod!</p> 
          </div>*/}
        </div>
      </div>
      
    );
};

export default Home;