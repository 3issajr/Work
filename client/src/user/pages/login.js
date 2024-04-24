import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {Fade} from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Login(){
    const Navigate = useNavigate()
    const [showPassword , setShowPassword] = useState(true)
    const [formData , setFormData] = useState({email:'',  password:''})
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signin', formData, { withCredentials: true })
            .then((result) => {
                document.getElementById('email-input').value = '';
                document.getElementById('password-input').value = '';
                localStorage.setItem("user", JSON.stringify(result.data.user.name));
                localStorage.setItem("token", JSON.stringify(result.data.token));
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 2000
                });
                setTimeout(() => { Navigate('/home') }, 3000);
            })
            .catch((err) => {
                toast.error(err.response.data.error, {
                    position: "top-center"
                });
            });
    };
    return(
        <>
        <div id='loginpage' className='h-screen'>

            {/* Login Header Starts*/}

            <div id='login-header' className='pt-8 flex justify-center items-center'>
                <Fade direction='down' duration={2000} >
                    <div id="login-header" className="flex justify-center content-center text-center flex-col mb-4">
                    <h1 className='text-7xl'>Login with Bistro Restaurant</h1>
                    <p className='text-xl pt-2'>Your gateway to exclusive offers, personalized recommendations, and seamless reservations awaits</p>
                    </div>
                </Fade>
            </div>

            {/* Login Header Ends*/}


            {/* Login Form Starts*/}


        <div id='login-form' className="flex justify-center text-center mt-16 ">

            <form onSubmit={handleSubmit} className='py-5'>

                <table className='bg-white shadow-md rounded-lg '>
                    <FontAwesomeIcon icon={faUser} className='text-4xl pt-2'/>
                    <tbody>

                        <tr>
                            <td className="text-3xl py-2">Email</td>
                        </tr>

                        <tr>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                type='email' 
                                name='email' 
                                id='email-input'
                                placeholder="Enter Your Email" 
                                className="text-center rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
                            </td>
                        </tr>

                        <tr>
                            <td className="text-3xl py-2">Password</td>
                        </tr>

                        <tr>
                            <td className="py-2">
                                <input 
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                type={showPassword ? "password" : "text"}
                                name='firstpass' 
                                id='password-input'
                                placeholder="Enter Your Password" 
                                className="text-center rounded-lg border border-gray-300 px-3 py-1 w-full focus:outline-none focus:border-red-700" />
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
                    <button className='w-1/2 text-2xl rounded-full text-white p-2'>
                        Submit
                    </button>
                </div>

            </form>  
            <ToastContainer position="top-center" />

              
        </div>

            {/* Login Form Ends*/}

        </div>
        </>
    )
}