import React from 'react'
import ReactDOM from "react-dom";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {CircleLoader} from 'react-spinners'
import {Reveal} from 'react-reveal'
import { CiUser } from "react-icons/ci";
import { GoogleLoginButton , FacebookLoginButton } from 'react-social-login-buttons';
import Line from '../../assets/weddingline.png'

const Signin = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [showPassword , setShowPassword] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{

        e.preventDefault()

        axios.post("http://localhost:3000/signin",{email,password},{withCredentials:true})

        .then((result)=>{

            if(result.status===200){
                document.getElementById('email-input').value=''
                document.getElementById('password-input').value=''

                localStorage.setItem("user",JSON.stringify(result.data.name))

                const loginDiv = (
                    <Reveal>
                      <div className="login-spinner d-flex justify-center mb-1">
                        <CircleLoader color="#ffffff" size={50} />
                      </div>  
                    </Reveal>
                  );
                  ReactDOM.render(loginDiv, document.getElementById("message"));

                setTimeout(()=>{navigate('/');},1000); 
            }
        })
        
        .catch((err)=>{
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

                <div className="container col-md-8 col-xl-6 text-center mx-auto mb-3">
                    <h2 className="w-lg-50">𝐿𝑜𝑔 𝒾𝓃</h2>
                </div>

            </div>

            <div className="row d-flex justify-content-center">

                <div className="col-md-6 col-xl-4">

                    <div className="card mb-5 bg-dark text-white">

                        <div className="card-body d-flex flex-column align-items-center">
                            
                            <div className="my-4">
                                <CiUser className='w-20 h-20' />
                            </div>

                            <div id="message" className='container flex justify-center p-3  font-extrabold text-2xl'style={{borderRadius:"10px",width:"20rem",color:"red"}}></div>

                            <form onSubmit={handleSubmit} className="text-center w-100">

                                <div className="mb-3">
                                    <input 
                                    required
                                    type="email" 
                                    name="email"
                                    id='email-input'
                                    className="form-control" 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Enter Your Email"/>
                                </div>

                                <div className="mb-3">
                                    <input 
                                    required
                                    type={showPassword ? "password" : "text"}
                                    name="password" 
                                    id='password-input'
                                    className="form-control" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Enter Your Password" />
                                </div>

                                <div className="mb-4">
                                    <button 
                                    className="btn btn-info d-block w-100 
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " 
                                    type="submit">
                                    Login
                                    </button>
                                </div>

                                <div className='mb-1 d-flex justify-center '>
                                    <GoogleLoginButton />
                                    <FacebookLoginButton />
                                </div>
                                
                                <div className='inline-flex justify-center my-4'>
                                    <input
                                    className='w-5 me-3 mt-1'
                                    id='checkbox'
                                    type="checkbox"
                                    value={showPassword}
                                    onChange={() => setShowPassword((prev) => !prev)}/>
                                    <p className='font-bold'>Show Password</p>
                                </div>

                                <div className='mb-3'>
                                    <NavLink to='/signup'
                                    className='btn btn-info d-block w-100 
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
                                    Sign up
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink to='/forgetpass'
                                    className='btn btn-info d-block w-100 
                                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
                                    Forgot your password?
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

export default Signin
