import React, { useState } from 'react'
import recipesData from '../Data/Recipesdata';
import "./Style.css";


export default function FilterRecipe({setFilteredRecipes}) {
 const [selectedCategory,setSelectedCategory]=useState('All')//Track selected category

 const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Filter recipes based on selected category
    const filtered = recipesData.filter((recipe) =>
        category === 'All' ? true : recipe.mealType === category
      );
      setFilteredRecipes(filtered);
}



  return (
   <>
   <div className="category-buttons col-lg-6 col-md-8 col-5 mt-md-0">
                    {/* <!-- Dropdown for Small Devices --> */}
                    <div className="d-md-none mb-3">
                        <button className="w-100 category" type="button" id="categoryDropdown" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i data-feather="list"></i> Categories
                        </button>
                        <ul className="dropdown-menu w-50 shadow" aria-labelledby="categoryDropdown">
                            <li>
                                <a className="dropdown-item" onClick={() => handleCategoryClick("All")}>All</a>
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={() => handleCategoryClick("Breakfast")}>Breakfast</a>
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={() => handleCategoryClick("Lunch")}>Lunch</a>
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={() => handleCategoryClick("Dinner")}>Dinner</a>
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={() => handleCategoryClick("Snacks")}>Snacks</a>
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={() => handleCategoryClick("Desserts")}>Desserts</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Buttons for Larger Devices --> */}
                          <div className="d-none d-md-flex justify-content-center mt-1">
                              <button
                                  className={`btn page3_button mx-1 ${selectedCategory === "All" ? "active" : ""}`}
                                  onClick={() => handleCategoryClick("All")}
                              >
                                  All
                              </button>

                              <button
                                  className={`btn page3_button mx-1 ${selectedCategory === "Breakfast" ? "active" : ""}`}
                                  onClick={() => handleCategoryClick("Breakfast")}
                              >
                                  Breakfast
                              </button>

                              <button
                                  className={`btn page3_button mx-1 ${selectedCategory === "Lunch" ? "active" : ""}`}
                                  onClick={() => handleCategoryClick("Lunch")}
                              >
                                  Lunch
                              </button>
                              <button
                                  className={`btn page3_button mx-1 ${selectedCategory === "Dinner" ? "active" : ""}`}
                                  onClick={() => handleCategoryClick("Dinner")}
                              >
                                  Dinner
                              </button>
                              <button
                                  className={`btn page3_button mx-1 ${selectedCategory === "Snacks" ? "active" : ""}`}
                                  onClick={() => handleCategoryClick("Snacks")}
                              >
                                  Snacks
                              </button>
                              <button
                                  className={`btn page3_button mx-1 ${selectedCategory === "Desserts" ? "active" : ""}`}
                                  onClick={() => handleCategoryClick("Desserts")}
                              >
                                  Desserts
                              </button>
                          </div>
                </div>
   
   
   </>
  )
}
