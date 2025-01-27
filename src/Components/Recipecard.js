import React, { useEffect } from 'react'
import "./Style.css"
export default function Recipecard(props) {
  useEffect(() => {
    window.feather.replace(); // Initialize Feather icons
  }, []);
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
                <p>Indregrients:{" "}
                {Array.isArray(props.ingredients) ? (props.ingredients).join(", ") : ingredients || "Not specified"}</p>

                <div className="clock row">
                  <p className="col-md-6 col-6"><i data-feather="clock"
                    className="clock-icon"></i>{props.time}</p>
                  <p className="col-md-6 col-6"><i className="fas fa-utensils breakfast-icon"></i>{props.mealType}</p>
                </div>

                <button className="btn page3_button">view Recipe</button>
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

        <div class="right-food row font2 ">

          <div class="col-lg-4 d-lg-inline d-none text-center right-recipe-div">
            <img src={props.sideImage} alt=".." class="img-fluid right-recipe-img" />
          </div>

          <div class="col-lg-8 ">
            <div class="row">
              <div class="pancakedescription col-md-6 col-12 text-md-start text-center px-lg-0 px-md-5 mt-4">
                <h3>{props.title}</h3>
                <p>Indregrients:{" "}
                {Array.isArray(props.ingredients) ? (props.ingredients).join(", ") : ingredients || "Not specified"}</p>
                <div class="clock row">
                  <p class="col-md-6 col-6" style={{ marginTop: "0.2rem" }}><i data-feather="clock"
                    class="clock-icon"></i>{props.time}</p>

                  <p class="col-md-6 col-6"><i class="fas fa-utensils breakfast-icon"></i>{props.mealType}</p>
                </div>

                <button class="btn page3_button">view Recipe</button>
                <button class="btn"> <a class="nav-link" href="#"><i class="icon"
                  data-feather="heart"></i></a></button>
              </div>

              <div class="col-md-6 col-12 text-md-start text-center mt-4 mt-md-0">
                <img src={props.image} alt="pancake" class="img-fluid food-img" />
              </div>
            </div>
          </div>

        </div>

      )}


    </>
  )
}
