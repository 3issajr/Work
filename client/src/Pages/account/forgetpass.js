import React from 'react'
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import Line from '../../assets/weddingline.png'




const Forgetpass = () => {

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
                    <h2>𝐹𝑜𝓇𝑔𝑒𝓉 𝒫𝒶𝓈𝓈𝓌𝑜𝓇𝒹</h2>
                </div>

            </div>

            <div className="row d-flex justify-content-center">

                <div className="col-md-6 col-xl-4">

                    <div className="card mb-5 bg-dark text-white">

                        <div className="card-body d-flex flex-column align-items-center">
                            
                            <div className="my-4">
                                <CiUser className='w-20 h-20' />
                            </div>

                            <form className="text-center w-100" method="post">

                                <div className="mb-3">
                                    <input 
                                    required
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Enter Your Email"/>
                                </div>
                               
                                <div className="mb-3">
                                    <button 
                                    className="btn btn-info d-block w-100 
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " 
                                    type="submit">
                                    Verify
                                    </button>
                                </div>

                                <div className='inline-flex justify-center mt-4'>
                                    <input
                                    className='w-5 me-3 mt-1'
                                    id='checkbox'
                                    type="checkbox"
                                    value={showPassword}
                                    onChange={() => setShowPassword((prev) => !prev)}/>
                                    <p className='font-bold'>Show Password</p>
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

export default Forgetpass
