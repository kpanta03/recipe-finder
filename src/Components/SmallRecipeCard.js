import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Style.css";

export default function SmallRecipeCard({ id,title, ingredients, time, mealType, image }) {

const navigate = useNavigate();

 useEffect(() => {
    window.feather.replace(); // Initialize Feather icons
  }, []);

  const handleViewRecipe = () => {
    // Navigate to the recipe detail page using the unique id
    navigate(`/recipeDetail/${id}`);
  };


    return (
        <>
            <div className="col-lg-6 col-12 p-3 my-3">
                <div className="row">

                    {/* <!-- image --> */}
                    <div className="col-sm-5 mt-3 text-center">
                        <img src={image} alt=".." className="img-fluid" style={{height:'180px'}} />
                    </div>

                    {/* <!-- description --> */}

                    <div className="col-sm-7 text-sm-start text-center">
                        <h3>{title}</h3>
                        <p >Indregrients:{" "}
                        {Array.isArray(ingredients) ? ingredients.join(", ") : ingredients || "Not specified"}</p>

                        <div className="clock row">
                            <p className="col-sm-12 col-6"><i data-feather="clock"
                                className="clock-icon"></i>{time}</p>
                            <p className="col-sm-12 col-6"><i className="fas fa-utensils breakfast-icon"></i>{mealType}</p>
                        </div>

                        <button className="btn page3_button" onClick={handleViewRecipe} >view Recipe</button>
                        <button className="btn"> <a className="nav-link" href="#"><i className="icon"
                            data-feather="heart"></i></a></button>
                    </div>

                </div>
            </div>

        </>
    )
}
