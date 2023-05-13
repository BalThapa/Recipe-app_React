import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import AddYourOwn from "./pages/AddYourOwn";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/addRecipe" element={<AddYourOwn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
