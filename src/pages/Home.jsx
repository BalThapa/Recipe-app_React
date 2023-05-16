import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
      <div>
        <div className='container'>
        {/* <video autoPlay loop muted play-inline id="background_video">
          <source src="https://player.vimeo.com/external/456896527.sd.mp4?s=5f834301c1c496b5e7f8fa8c0772defd2760df7b&profile_id=164&oauth2_token_id=57447761" />
           </video> */}
          <h2>A recipe has no soul.</h2>
          <h2>You ,as the cook must bring soul to the recipe.</h2>
          <h2>-THOMAS KELLER</h2>
          <NavLink to="/recipeList"><button>Browse Recipes</button></NavLink>
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
            <h3>Want to Know more about our Projects?</h3>
            <p>Visit our programme homepage</p>
            <NavLink to="https://en.bc.fi/qualifications/full-stack-web-developer-program/" className="NavLink">Business College Helsinki homepage</NavLink>
          </div>
        </section>
      </div>
      
    );
};

export default Home;