import React,{useState} from 'react'
import recipesData from '../Data/Recipesdata';
import "./Style.css";

export default function SearchRecipe({setFilteredRecipes}) {
    const [searchQuery, setSearchQuery] = useState('');



// for filtering search
const handleSearchChange=(e)=>{
    const query=e.target.value;
    setSearchQuery(query);
    filterRecipes(query)
}
   
const filterRecipes=(query)=>{
    
    if (query.trim()){

    // user le search gareko words haru
    const queryWords=query.toLowerCase().split(',').map((word)=>word.trim()).filter((word) => word);


    const filtered=recipesData.filter((recipe)=>{
        const title = recipe.title.toLowerCase();
        const ingredients = Array.isArray(recipe.ingredients)
            ? recipe.ingredients.join(' ').toLowerCase()  // Convert array to string if ingredients is an array
            : recipe.ingredients.toLowerCase();

        return queryWords.every(
            (word)=>title.includes(word)||ingredients.includes(word)

        );
    })
    
 setFilteredRecipes(filtered)
    }
}


    return (
   <>
    <div className="custom-search-bar ">
                    <input 
                    type="text" 
                    className="form-control bg-transparent text-white" 
                    placeholder="Search by title or ingredients"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
                    <button className="btn p-0">
                        <i data-feather="search"></i>
                    </button>
                    </div>
   
   </>
  )
}
