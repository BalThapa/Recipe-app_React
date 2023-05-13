import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
      <div>
        <div className='box'>
          <h1>A recipe has no soul.</h1>
          <h1>You ,as the cook must bring soul to the recipe.</h1>
          <h1>-THOMAS KELLER</h1>
          <NavLink to="/recipeList"><button>Browse Recipes</button></NavLink>
        </div>
        <h2>Looking For the recipes?</h2>
        <section>
          <div className='box1'>
            <h3>Browse recipes</h3>
            <p>Find your favourites in this collection. You can search recipes based on name or country</p>
            <NavLink to="/recipeList" className="NavLink">All recipes</NavLink>
          </div>
          <div className='box1'>
            <h3>Add recipes</h3>
            <p>Recipes from your country is missing? No worries, add one!</p>
            <NavLink to="/recipeList" className="NavLink">Add recipes</NavLink>
          </div>
          <div className='box1'>
            <h3>Want to Know more about our Projects?</h3>
            <p>Visit our programme homepage</p>
            <NavLink to="https://en.bc.fi/qualifications/full-stack-web-developer-program/" className="NavLink">Business College Helsinki homepage</NavLink>
          </div>
        </section>

      </div>
    );
};

export default Home;