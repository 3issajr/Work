import React, { useState } from 'react'
import ReactDOM from "react-dom";
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';

import {CircleLoader} from 'react-spinners'
import {Reveal, Zoom} from 'react-reveal'
import { CiUser } from "react-icons/ci";
import Line from '../../assets/weddingline.png'


const Signup = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [firstpass , setFirstPass] = useState('')
    const [secondpass , setSecondPass] = useState('')
    const [gender , setGender] = useState('')
    const [showPassword , setShowPassword] = useState(true)
    const navigate = useNavigate()

const handleSubmit = async (e)=>{
        e.preventDefault()

        const newUser = {name,email,firstpass,secondpass,gender}

        axios.post("http://localhost:3000/signup",newUser)
        
        .then((result)=>{
            console.log(result)
            if(result.status == 201){

                localStorage.setItem("user",JSON.stringify(newUser.name))
                
                const loginDiv = (
                    <Reveal>
                      <div className="login-spinner d-flex justify-center mb-1">
                        <CircleLoader color="#ffffff" size={50} />
                      </div>   
                    </Reveal>
                  );
                  ReactDOM.render(loginDiv, document.getElementById("message"));

                  setTimeout(() => {navigate('/');}, 1000); 

            }
        })
    
        .catch((err)=>{
            console.log(err)
            if(err.response.status == 400){
                const errorMessage = (
                    <Reveal>
                        <p>{err.response.data.error}</p>
                    </Reveal>
                );
                ReactDOM.render(errorMessage, document.getElementById("message"));
            }
        })
    }


  return (
    <>
<div className='container col-md-8 col-xl-6  text-md-start mx-auto mt-5' id='line'>
    <img src={Line} alt='weddingline'/>
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

                            <span id='signuploading'></span>
                            <div id="message" className='container flex justify-center p-3  font-extrabold text-2xl'style={{borderRadius:"10px",color:"red"}}></div>

                            <form onSubmit={handleSubmit} className="text-center w-100">

                                <div className="mb-3">
                                    <input 
                                    required
                                    className="form-control text " 
                                    type="text" 
                                    name="username" 
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder="Enter Your Username"/>
                                </div>

                                <div className="mb-3">
                                    <input 
                                    required
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Enter Your Email"/>
                                </div>

                                <div className="mb-3">
                                    <input
                                    required
                                    type={showPassword ? "password" : "text"}
                                    className="form-control" 
                                    name="password"
                                    onChange={(e)=>setFirstPass(e.target.value)}
                                    placeholder="Enter Your Password"/>
                                </div>

                                <div className="mb-3">
                                    <input 
                                    type={showPassword ? "password" : "text"}
                                    required
                                    className="form-control" 
                                    name="password2"
                                    onChange={(e)=>setSecondPass(e.target.value)} 
                                    placeholder="Re-Enter Your Password"/>
                                </div>

                                <div className="mb-5">
                                    <select 
                                    className="form-control" 
                                    type="select"
                                     name="gender"
                                     onChange={(e)=>setGender(e.target.value)}>
                                        <option hidden select>Select Gender</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>

                                <div className='inline-flex justify-center my-3'>
                                    <input
                                    className='w-5 me-3'
                                    id='checkbox'
                                    type="checkbox"
                                    value={showPassword}
                                    onChange={() => setShowPassword((prev) => !prev)}/>
                                    <p className='font-bold'>Show Password</p>
                                </div>

                                <div className="mb-3">
                                    <button 
                                    type="submit"
                                    className="btn btn-info d-block w-100 
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> 
                                    Login
                                    </button>
                                </div>

                                <div>
                                    <NavLink to='/signin' 
                                    className="btn btn-info d-block w-100
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

export default Signup
