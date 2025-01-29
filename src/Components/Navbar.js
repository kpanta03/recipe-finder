import React,{useEffect} from 'react'
import './Style.css'
import logo from "../Assets/images/logo1.png";
import {NavLink,useLocation } from "react-router-dom";
export default function Navbar() {

   // Feather icons will replace the placeholder <i> elements after the component mounts
  useEffect(() => {
    window.feather.replace(); // Initialize Feather icons
  }, []);

  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";

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
                        <NavLink className={({isActive})=>(isActive?"active nav-link":"nav-link")} to="/Favourite"><i className="icon" data-feather="heart"></i></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={isAuthPage ? "active nav-link" : "nav-link"} to="/SignIn">
                  <i className="icon" data-feather="user"></i>
                </NavLink>
                    </li>
                </ul>


            </div>
        </div>
    </nav>
    

   </>
  )
}
