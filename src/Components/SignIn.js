import React from 'react'
import './Style.css'
import loginimg from '../Assets/images/loginimg.png'
// import signinbackground from '../Assets/images/signinbackground.png'
import {NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <>
    {/* style={{backgroundImage:`url(${signinbackground})`}} */}
    {/* style={{marginTop:'10rem'}} */}
    <div className="container-fluid min-vh-100 py-5 d-flex align-items-center justify-content-center overflow-auto bg-dar" >
        <div className="border border-2 border-light p-3 main_login">
           
                <div className="row g-0 bg-black sign-in-card">
                {/* <!-- Image Section --> */}
                <div className="col-md-5 col-12">
                    <img src={loginimg} className="img-fluid w-100  " alt="Delicious Pasta Dish"/>
                </div>
                {/* <!-- Form Section --> */}
                <div className="col-md-7 col-12 bg-black text-white d-flex flex-column justify-content-center p-4">
                    <h2 className="text-center mb-3">Sign In</h2>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control custom-input" id="username" placeholder="Username"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control custom-input" id="password" placeholder="Password"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <input type="checkbox" id="remember-me"/>
                                <label htmlFor="remember-me" className="form-check-label">Remember me</label>
                            </div>
                            <a href="#" className="text-danger text-decoration-none">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn btn-danger w-100 custom-input">Sign In</button>
                    </form>
                    <p className="text-center mt-3">Don't have an account? <NavLink to="/signup" className="text-danger text-decoration-none">Sign Up</NavLink></p>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
