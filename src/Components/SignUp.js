import React from 'react'
import loginimg from '../Assets/images/loginimg.png'
import {NavLink } from "react-router-dom";
import './Style.css'


export default function SignUp() {
  return (
    <>
     <div className="container-fluid min-vh-100 py-5 d-flex align-items-center justify-content-center overflow-auto bg-dar">
        <div className="border border-2 border-light p-3 main_login">
           
                <div className="row g-0 bg-black sign-in-card">
                {/* <!-- Image Section --> */}
                <div className="col-md-5 col-12">
                    <img src={loginimg} className="img-fluid w-100" alt="Delicious Pasta Dish"/>
                </div>
                {/* <!-- Form Section --> */}
                <div className="col-md-7 col-12 bg-black text-white d-flex flex-column justify-content-center p-4">
                    <h2 className="text-center mb-3">Sign Up</h2>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control custom-input" id="username" placeholder="Username"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control custom-input" id="email" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control custom-input" id="password" placeholder="Password"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control custom-input" id="confirm-password" placeholder="Confirm Password"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <input type="checkbox" id="terms"/>
                                <label htmlFor="terms" className="form-check-label">I agree to the <a href="#" className="text-danger text-decoration-none">Terms & Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger w-100 custom-input">Sign Up</button>
                    </form>
                    <p className="text-center mt-3">Already have an account?<NavLink to="/signin" className="text-danger text-decoration-none">Sign In</NavLink></p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
