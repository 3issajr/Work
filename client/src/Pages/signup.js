import React from 'react'
import { CiUser } from "react-icons/ci";
import Line from '../assets/weddingline.png'
import { NavLink } from 'react-router-dom';



const signup = () => {
  return (
    <>

<div className='container col-md-8 col-xl-6  text-md-start mx-auto mt-5' id='line'>
    <img src={Line}/>
</div>

<section className="py-xl-5">

        <div className="container ">

            <div className="row mb-5">

                <div className="container col-md-8 col-xl-6 text-center mx-auto">
                    <h2>𝒞𝓇𝑒𝒶𝓉𝑒 𝓎𝑜𝓊𝓇 𝒶𝒸𝒸𝑜𝓊𝓃𝓉</h2>
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
                                    className="form-control" 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter Your Username"/>
                                </div>
                                <div className="mb-3">
                                    <input 
                                    required
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter Your Email"/>
                                </div>
                                <div className="mb-3">
                                    <input
                                    required
                                    className="form-control" 
                                    type="password" 
                                    name="password"
                                    placeholder="Enter Your Password"/>
                                </div>
                                <div className="mb-3">
                                    <input 
                                    required
                                    className="form-control" 
                                    type="password" 
                                    name="password2" 
                                    placeholder="Re-Enter Your Password"/>
                                </div>
                                <div className="mb-5">
                                    <select className="form-control" type="select" name="gender">
                                        <option hidden select>Select Gender</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <button 
                                    type="submit"
                                    className="btn btn-primary d-block w-100 
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> 
                                    Login</button>
                                </div>
                                <div className="mb-3">
                                    <NavLink to='/signin' 
                                    type="submit"
                                    className="btn btn-primary d-block w-100
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                    Already Have an Account?
                                    </NavLink>
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

export default signup
