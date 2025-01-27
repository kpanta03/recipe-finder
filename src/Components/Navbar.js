import React,{useEffect} from 'react'
import './Style.css'
import logo from "../Assets/images/logo1.png";
import {NavLink } from "react-router-dom";
export default function Navbar() {
   // Feather icons will replace the placeholder <i> elements after the component mounts
  useEffect(() => {
    window.feather.replace(); // Initialize Feather icons
  }, []);

  return (
   <>
    <nav className="navbar navbar-expand-lg">
        <div className="container position-relative">
            {/* <!-- Logo --> */}
            <a className="navbar-logo" to="/"><img src={logo} className="img-fluid logo"/></a>

            {/* <!-- Toggler Button --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                {/* <!-- Left side items --> */}
                <ul className="navbar-nav left-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={({isActive})=>(isActive?"active nav-link":"nav-link")} aria-current="page" to="/" end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>(isActive?"active nav-link":"nav-link")} to="/recipes">Recipes</NavLink>
                    </li>
                </ul>

                {/* <!-- Right side items --> */}
                <ul className="navbar-nav right-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={({isActive})=>(isActive?"active nav-link":"nav-link")} to="/about">About Us</NavLink>
                    </li>
                </ul>

                {/* <!-- icons --> */}

                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="icon" data-feather="heart"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="icon" data-feather="user"></i></a>
                    </li>
                </ul>


            </div>
        </div>
    </nav>

   </>
  )
}
