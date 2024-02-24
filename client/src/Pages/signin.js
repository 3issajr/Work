import React from 'react'
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import Line from '../assets/weddingline.png'




const Signin = () => {

 const [showPassword , setShowPassword] = useState(true)

  return (
    <>

<div className='container col-md-8 col-xl-6  text-md-start mx-auto mt-5' id='line'>
    <img src={Line} alt='weddingline'/>
</div>

<section className="py-xl-5">

        <div className="container ">

            <div className="row mb-5">

                <div className="container col-md-8 col-xl-6 text-center mx-auto">
                    <h2>𝐿𝑜𝑔 𝒾𝓃</h2>
                </div>

            </div>

            <div className="row d-flex justify-content-center">

                <div className="col-md-6 col-xl-4">

                   
                    <div className="card mb-5 bg-dark text-white">

                        <div className="card-body d-flex flex-column align-items-center">
                            
                            <div className="my-4">
                                <CiUser className='w-20 h-20' />
                            </div>

                            <form className="text-center" method="post">

                                <div className="mb-3">
                                    <input 
                                    required
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Enter Your Email"/>
                                </div>

                                <div className="mb-3">
                                    <input 
                                    required
                                    type={showPassword ? "password" : "text"}
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Enter Your Password" />
                                </div>

                                <div className="mb-5">
                                    <button className="btn btn-primary d-block w-100 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " type="submit">Login</button>
                                </div>

                                <NavLink to='/signup'
                                 className='btn btn-primary d-block w-100 
                                 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
                                Sign up
                                </NavLink>

                                <br/>

                                <NavLink to='/forgetpass'
                                 className='btn btn-primary d-block w-100 
                                 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
                                 Forgot your password?
                                </NavLink>
                                
                                <div className='flex justify-center'>
                                    <input
                                    className='w-5'
                                    id='checkbox'
                                    type="checkbox"
                                    value={showPassword}
                                    onChange={() => setShowPassword((prev) => !prev)}/>
                                    <p className='pt-3 px-2 font-bold'>Show Password</p>
                                </div>
                                
                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
      
    </>
  )
}

export default Signin
