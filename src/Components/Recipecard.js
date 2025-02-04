import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Style.css"
export default function Recipecard(props) {
  useEffect(() => {
    window.feather.replace(); // Initialize Feather icons
  }, []);

  const navigate = useNavigate(); // useNavigate hook to navigate to another page
  // Handle button click to navigate to recipe detail page
  const handleClick = () => {
    // navigate(`/recipeDetail/${props.id}`);
    navigate(`/recipeDetail/${props.id}`);

  };
  
  return (
    <>
      {(props.isLeftCard) && (
        <div className="left-food row font2 ">
          <div className="col-lg-8 mt-4">

            <div className="row">
              <div className="col-md-6 col-12 text-md-center text-center">
                <img src={props.image} alt="pancake" className="img-fluid food-img" />
              </div>

              <div className="pancakedescription col-md-6 col-12 text-md-start text-center mt-lg-0 mt-2">
                <h3>{props.title}</h3>
                <p>Ingredients:{" "}
                {Array.isArray(props.ingredients) ? (props.ingredients).join(", ") : props.ingredients || "Not specified"}</p>

                <div className="clock row">
                  <p className="col-md-6 col-6"><i data-feather="clock"
                    className="clock-icon"></i>{props.time}</p>
                  <p className="col-md-6 col-6"><i className="fas fa-utensils breakfast-icon"></i>{props.mealType}</p>
                </div>

                <button className="btn page3_button" onClick={handleClick}>view Recipe</button>
                <button className="btn"> <a className="nav-link" href="#"><i className="icon"
                  data-feather="heart"></i></a></button>
              </div>
            </div>

          </div>

          <div className="col-lg-4 d-lg-inline d-none text-center left-recipe-div">
            <img src={props.sideImage} alt=".." className="img-fluid left-recipe-img" />
          </div>
        </div>
      )}


      {!(props.isLeftCard) && (

        <div className="right-food row font2 ">

          <div className="col-lg-4 d-lg-inline d-none text-center right-recipe-div">
            <img src={props.sideImage} alt=".." className="img-fluid right-recipe-img" />
          </div>

          <div className="col-lg-8 ">
            <div className="row">
              <div className="pancakedescription col-md-6 col-12 text-md-start text-center px-lg-0 px-md-5 mt-4">
                <h3>{props.title}</h3>
                <p>Ingredients:{" "}
                {Array.isArray(props.ingredients) ? (props.ingredients).join(", ") : props.ingredients || "Not specified"}</p>
                <div className="clock row">
                  <p className="col-md-6 col-6" style={{ marginTop: "0.2rem" }}><i data-feather="clock"
                    className="clock-icon"></i>{props.time}</p>

                  <p className="col-md-6 col-6"><i className="fas fa-utensils breakfast-icon"></i>{props.mealType}</p>
                </div>

                <button className="btn page3_button" onClick={handleClick}>view Recipe</button>
                <button className="btn"> <a className="nav-link" href="#"><i className="icon"
                  data-feather="heart"></i></a></button>
              </div>

              <div className="col-md-6 col-12 text-md-start text-center mt-4 mt-md-0">
                <img src={props.image} alt="pancake" className="img-fluid food-img" />
              </div>
            </div>
          </div>

        </div>

      )}


    </>
  )
}
