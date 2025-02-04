import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // For dynamic routing if needed
import './Style.css'; // Your custom CSS file
import recipesData from '../Data/Recipesdata';
import chilly from '../Assets/images/chilly.png'



const RecipeDetail = () => {
  // If you plan to load a recipe based on a route parameter:
  const { recipeId } = useParams(); // For example, /recipedetail/123
  // You can use recipeId to fetch or select the proper recipe data.
  const navigate = useNavigate();


  // Find the recipe that matches the recipeId (convert to string if needed)
  const recipe = recipesData.find((r) => r.id.toString() === recipeId);

   // Initialize Feather icons after component mounts
   useEffect(() => {
    if (window.feather) {
      window.feather.replace();
      window.scrollTo(0, 0); 
    }
  }, []);
 

  // Manage video play state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  // Event handler for playing the video
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Event handler for pausing the video
  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!recipe) {
    return (
      <div className="container text-center py-5">
        <h2>Recipe not found.</h2>
      </div>
    );
  }


  /*** DYNAMIC RECOMMENDATIONS CAROUSEL ***/
  // Create a list of recommended recipes (for example, all recipes excluding the current one)
  const recommendedRecipes = recipesData.filter((r) => r.id.toString() !== recipeId);

  // Group the recommended recipes into subarrays of two items per carousel slide
  const groupSize = 2;
  const groupedRecommendations = recommendedRecipes.reduce((groups, item, index) => {
    if (index % groupSize === 0) {
      groups.push([item]);
    } else {
      groups[groups.length - 1].push(item);
    }
    return groups;
  }, []);
 

  return (
    <>
    <div className="container py-5 recipe-detail">
      <div className="row">
        {/* Left Side: Recipe Image and Basic Info */}
        <div className="col-md-5 col-12 mt-5 text-md-start text-center">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="img-fluid recipe-img"
          />
          <div className="pancakedescription py-4 ms-md-3 font2">
            <h3>{recipe.title}</h3>
            <p>
            Ingredients:{' '}
                {Array.isArray(recipe.ingredients)
                  ? recipe.ingredients.join(', ')
                  : recipe.ingredients}
            </p>
            <div className="clock row">
              <p className="col-12">
                <i data-feather="clock" className="clock-icon"></i>{recipe.time}
              </p>
              <p className="col-12">
                <i className="fas fa-utensils breakfast-icon"></i>{recipe.mealType}
              </p>
            </div>
            <button className="btn">
              <a className="nav-link" href="#">
                <i data-feather="heart" className="icon"></i>
              </a>
            </button>
          </div>
        </div>

        {/* Right Side: Recipe Details and Steps */}
        <div className="col-md-7 col-12">
            <h2 className="font1 custom-heading recipedetail-heading mt-md-0 mt-4 text-center">
              UNLEASH YOUR INNER CHEF—TIME FOR {recipe.title.toUpperCase()} !
            </h2>
            {recipe.steps && recipe.steps.length > 0 ? (
              <>
                <p className="font2 fs-md-5 fs-6 custom-para text-center">
                  Follow these steps to make a delicious {recipe.title}!
                </p>
                <ul className="steps list-unstyled fs-5 mt-5">
                  {recipe.steps.map((step, index) => (
                    <li
                      key={index}
                      className={`step-item ${index % 2 === 0 ? 'odd' : 'even'} d-flex ${
                        index % 2 !== 0 ? 'ms-5' : ''
                      }`}
                    >
                      <span className="step-number">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <p className="step-text mt-2">{step}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="font2 fs-md-5 fs-6 custom-para text-center">
                Detailed steps for this recipe are not available.
              </p>
            )}
          </div>

      </div>

      {/* Video Section */}
      <div className="row text-center">
        <h1 className="recipedetail-heading font1 mt-md-0 mt-5">
          <span className="custom-icon">🍕</span> STEP-BY-STEP-VIDEO - CLICK TO WATCH!
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-8 col-12 position-relative ps-4 ms-md-5">
            <video
              ref={videoRef}
              src={recipe.video}
              className="custom-video"
              onClick={handlePauseVideo}
            ></video>
            {/* Show play button only when video is not playing */}
            {!isPlaying && (
              <div className="play-button" onClick={handlePlayVideo}>
                <i data-feather="play"></i>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

      {/* Also Try Carousel Section */}

      <div className="container-fluid also-try-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left Chili */}
            <div className="col-3">
              <img src={chilly} className="chilly-left img-fluid" alt="Chilly" />
            </div>
            {/* Section Title */}
            <div className="col-6">
              <h2 className="text-center recipedetail-heading font1">ALSO TRY</h2>
            </div>
            {/* Right Chili */}
            <div className="col-3">
              <img src={chilly} className="chilly-right img-fluid" alt="Chilly" />
            </div>
          </div>
        </div>

        {/* Carousel – You can integrate a carousel library or Bootstrap Carousel */}
        {/* Dynamic Recommendations Carousel */}
        {groupedRecommendations.length > 0 && (
          <div className="container-fluid mt-4">
            <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {groupedRecommendations.map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={`carousel-item container-fluid ${groupIndex === 0 ? 'active' : ''}`}
                  >
                    <div className="row">
                      {group.map((rec) => (
                        <div key={rec.id} className="col-md-6 col-12 p-4 my-3">
                          <div className="row">
                            <div className="col-sm-5 col-12 mt-3 text-center">
                              <img
                                src={rec.image}
                                alt={rec.title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-sm-7 col-12 text-sm-start text-center">
                              <h3>{rec.title}</h3>
                              <p>
                                Ingredients:{' '}
                                {Array.isArray(rec.ingredients)
                                  ? rec.ingredients.join(', ')
                                  : rec.ingredients}
                              </p>
                              <div className="clock row">
                                <p className="col-12">
                                  <i data-feather="clock" className="clock-icon"></i> {rec.time}
                                </p>
                                <p className="col-12">
                                  <i className="fas fa-utensils breakfast-icon"></i> {rec.mealType}
                                </p>
                              </div>
                              <button
                                className="btn page3_button"
                                onClick={() => navigate(`/recipeDetail/${rec.id}`)}
                              >
                                View Recipe
                              </button>
                              <button className="btn">
                                <a className="nav-link" href="#">
                                  <i data-feather="heart" className="icon"></i>
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#recipeCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#recipeCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        )}
      </div>
        
      
    
    </>
  );
};

export default RecipeDetail;
