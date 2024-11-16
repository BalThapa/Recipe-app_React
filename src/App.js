import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import AddYourOwn from "./pages/AddYourOwn";
import RecipeDetail from "./pages/RecipeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return ( 
    <BrowserRouter basename="/Recipe-app_React"> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/addRecipe" element={<AddYourOwn />} />
        <Route path="/recipeList/:recipedetail" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
