import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import page1 from "../Assets/images/page1.png";
import background from "../Assets/images/page2background.png";
import "./Style.css";
import Recipecard from './Recipecard';
import recipesData from '../Data/Recipesdata.js';
import SmallRecipeCard from './SmallRecipeCard';
export default function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.feather.replace(); // Initialize Feather icons
  }, []);

  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();

    // If the search query is empty, clear the filteredRecipes
    if (!trimmedQuery) {
      setFilteredRecipes([]);
      setHasSearched(false);
      return;
    }

    // Split the query into words and filter recipes.querywords is list of ingredients.
    const queryWords = trimmedQuery
      .toLowerCase()
      .split(',') 
      .map((word) => word.trim())
      .filter((word) => word); // Remove empty strings

    const filtered = recipesData.filter((recipe) => {
      const title = recipe.title.toLowerCase().split(' ');
      const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients.join(' ').toLowerCase()  // Convert array to string if ingredients is an array
        : recipe.ingredients.toLowerCase();

      return queryWords.every((word) => {
        return title.includes(word) || ingredients.includes(word);
      });
    });

    setFilteredRecipes(filtered);
    setHasSearched(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const popularRecipes = [...recipesData]
    .sort((a, b) => b.favourites - a.favourites)  // Sort by favourites (highest first)
    .slice(0, 4); // Get only the top 4

  return (
    <>
      <div className="container-fluid my-lg-5 page1">
        <div className="row">
          <div className=" col-12 col-lg-7 px-3 py-lg-5 py-3">
            <h3 className="font1 page1_heading">
              Discover Delicious Recipes At your fingertips-search, filter, and savor the flavours you love!
            </h3>

            <div className=" mt-5">
              <div className="custom-search-bar d-flex">
                <input
                  type="text"
                  className="form-control bg-transparent text-white"
                  placeholder="Search by ingredients (separated by comma) or Food"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress} // Trigger search on Enter key press
                />
                <button className="btn p-0 ms-2" onClick={handleSearch}>
                  <i data-feather="search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-flex text-end">
            <img src={page1} alt="photo" className="img-fluid page1-img" />
          </div>
        </div>
      </div>

      {/* Render Search Results */}
      <div className="recipes container-fluid mt-lg-4">
        <div className="row">
          {filteredRecipes.map((recipe, index) => (
            <SmallRecipeCard key={recipe.id || index} {...recipe} />
          ))}
          {hasSearched && filteredRecipes.length === 0 && (
            <p className="text-center mt-4">No recipes found matching your search.</p>
          )}
        </div>
      </div>

      {/* page2 */}
      <div className="page2 container-fluid">
        <img src={background} alt="page2" className="page2_img img-fluid" />
        <div className="container text-center page2_content">
          <h1 className="font1 page2_heading">About Us</h1>
          <p className="font2 page2_para">
            Welcome to Recipe Finder, your ultimate destination for discovering mouthwatering recipes tailored to your ingredients and preferences. Our mission is to make cooking easier and more enjoyable by bringing you a curated collection of recipes from around the world. Whether you're a seasoned chef or a beginner, Recipe Finder empowers you to explore, filter, and find the perfect dish for every occasion. Join us on this flavorful journey and let’s make cooking a delightful experience!
          </p>
          <button className="btn button" onClick={() => navigate('/about')}>Find out more</button>
        </div>
      </div>

      {/* page3 */}
      <div className="container-fluid page3">
        <h1 className="font1 page3_heading text-center">Popular Recipes</h1>

        {popularRecipes.map((recipe, index) => (
          <Recipecard
            key={recipe.id || index}  // Add the key prop here with a unique value
            id={recipe.id} 
            title={recipe.title}
            ingredients={recipe.ingredients}
            time={recipe.time}
            mealType={recipe.mealType}
            image={recipe.image}
            sideImage={recipe.sideImage}
            isLeftCard={index % 2 === 0}
          />
        ))}

        {/* See more */}
        <div className="text-center mb-4" style={{ marginTop: "-2rem" }}>
          <button className="btn button" onClick={() => navigate('/recipes')}>See more</button>
        </div>
      </div>
    </>
  );
}
