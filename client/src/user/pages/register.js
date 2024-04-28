import React, { useState } from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import axios from 'axios'
import {Fade} from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Register(){
    
    const Navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(true)
    const [formData , setFormData] = useState({ name:'', email:'', phone:'',  gender:'', firstpass:'', secondpass:'' })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signup',formData)
        .then((result)=>{
            toast.success(result.data.message, { position: "top-center",autoClose: 2000});
                setTimeout(()=>{Navigate('/login')},3000)
        })
        .catch((err)=>{
            toast.error(err.response.data.error, { position: "top-center" });          
            if(err.response.status == 500) {toast.error(err.response.data.error, { position: "top-center"});}
        })

    };
 
    return(
        <>
        <div id="registerpage" className='pt-7'>

            {/* Register Header Starts*/}

                <Fade direction='down' duration={2000} >
                    <div id="registration-header" className="flex justify-center text-center flex-col text-4xl mb-4">
                    <h1 className='text-5xl pb-2'>Register with Bistro Restaurant</h1>
                    <p className="text-lg">Register now to receive exclusive offers, updates on our latest menu items, and invitations to special events!</p>
                    </div>
                </Fade>

            {/* Register Header Ends*/}


            {/* Register Form Start*/}

        <div id='registration-form' className="flex justify-center text-center mt-5 xxs:p-5  ">

            <form onSubmit={handleSubmit} className='py-5 '>

                <table className='bg-white shadow-md rounded-lg flex justify-center flex-col  '>
                <FontAwesomeIcon icon={faUser} className='text-4xl pt-2'/>
                    <tbody className=''>

                        <tr>
                            <td className="text-3xl py-2">Full Name</td>
                            <td className="text-3xl py-2">Email</td>
                        </tr>

                        <tr>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                type='text' 
                                name='name' 
                                placeholder="Enter Your Name" 
                                className="rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
                            </td>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                type='email' 
                                name='email' 
                                placeholder="Enter Your Email" 
                                className="rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
                            </td>
                        </tr>

                        <tr>
                            <td className="text-3xl py-2">Phone</td>
                            <td className="text-3xl py-2">Gender</td>
                        </tr>

                        <tr>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                type='tel' 
                                name='phone' 
                                placeholder="Enter Your Phone Number" 
                                className="rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
                            </td>
                            <td className="py-2">
                                <select
                                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                className="rounded-lg border-gray-300 border px-3 py-1 w-full">
                                    <option value='' hidden></option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-3xl py-2">Password</td>
                            <td className="text-3xl py-2">Re-enter Password</td>
                        </tr>

                        <tr>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, firstpass: e.target.value})}
                                type={showPassword ? "password" : "text"}
                                name='firstpass' 
                                placeholder="Enter Your Password" 
                                className="rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
                            </td>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, secondpass: e.target.value})}
                                type={showPassword ? "password" : "text"}
                                name='secondpass' 
                                placeholder="Re-Enter Your Password" 
                                className="rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div className='inline-flex justify-center my-3'>
                    <input
                    className='w-5 me-3'
                    id='checkbox'
                    type="checkbox"
                    value={showPassword}
                    onChange={() => setShowPassword((prev) => !prev)}/>
                    <p className='font-bold'>Show Password</p>
                </div>

                <div id='register-btns' className='pt-5 gap-5 flex justify-center items-center flex-col'>
                    <NavLink to='/login' className='btn w-1/2 text-2xl rounded-full text-white p-2 xs:w-1/2'>
                        Already have an Account?
                    </NavLink>

                    <button type='submit' className='w-1/2 text-2xl rounded-full text-white p-2'>
                        Submit
                    </button>
                </div>


            </form>    
            <ToastContainer/>
        </div>
            
            {/* Register Form Ends*/}

        </div>
        </>
    )
}