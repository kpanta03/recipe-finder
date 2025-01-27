import React,{useEffect,useState} from 'react'
import SmallRecipeCard from './SmallRecipeCard'
import recipesData from '../Data/Recipesdata';
import SearchRecipe from './SearchRecipe';
import FilterRecipe from './FilterRecipe';
import "./Style.css";

export default function Recipes() {

    useEffect(() => {
        window.feather.replace(); // Initialize Feather icons
        window.scrollTo(0, 0); 
    }, []);
      const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  return (
    <>
    <div className="container-fluid mt-5">
        {/* <!-- Recipe filter --> */}
        <div className="container-xl px-3 py-md-3 py-2 mt-md-5">
            <div className="row">

                {/* <!-- Category Buttons --> */}
                <FilterRecipe setFilteredRecipes={setFilteredRecipes}/>

                {/* <!-- Search Bar --> */}
                <div className="col-lg-6 col-md-4 col-7">
                   <SearchRecipe setFilteredRecipes={setFilteredRecipes}/>
                </div>


            </div>
        </div>

        {/* <!-- Recipe grid --> */}
        <div className="recipes container-fluid mt-lg-4">
            <div className="row">
                {/* <!-- 1st recipe --> */}
            {filteredRecipes.map((recipe,index)=>(
                <SmallRecipeCard key={index} {...recipe}/>
            ))}
             {filteredRecipes.length === 0 && (
              <p className="text-center mt-4">No recipes found matching your search.</p>
            )}
            </div>
        </div>
    </div>
    
    </>
  )
}
