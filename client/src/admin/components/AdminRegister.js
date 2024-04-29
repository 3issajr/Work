import AdminDashBoard from "./AdminDashboard"

import { useState } from 'react';
import {useNavigate , Link} from 'react-router-dom'
import axios from 'axios'

import { Bounce } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminRegister(){
    const username = localStorage.getItem('admin');
    const Navigate = useNavigate()

    const [formData , setFormData] = useState({name : "", email : "", firstpass:"", secondpass:"", level:""})


    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3000/adminregister',formData)
        .then((response)=>{
            toast.success(response.data.message, {position: "top-center", autoClose: 2000 });
            setTimeout(() => { Navigate('/Admin/dashboard')}, 2000);
        })
        .catch((err)=>{
            toast.error(error.response.data.error, { position: "top-center"});
         
        })
    }

    if (username == null) {
        return(
        <Bounce>
            <div className="text-red-800 text-3xl flex justify-center items-center h-screen">
                <div className='bg-slate-200 rounded-lg shadow-md font-bold text-center'>
                <h1 className=' text-5xl p-5 '>You Must Login First</h1>
                <Link to='/Admin/'>Click To Login</Link>
                </div>
            </div>
        </Bounce>
        )
    }
    
    return(
        <>
        <div id = 'register'>

            <AdminDashBoard/>


            <div id = 'register-form' className="p-32">
                
            <form  className="flex  flex-col  justify-center gap-5 p-10 text-center ">
                    <FontAwesomeIcon icon={faUser} className='text-5xl'/>
                    <div id='form-header'>
                        <h1 className="text-5xl text-red-800 font-bold ">Admin Registeration</h1>
                    </div>
                    <div>
                        <input 
                        onChange={(e)=>setFormData({...formData , name : e.target.value})}
                        type='text' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Username"/>
                    </div>

                    <div>
                        <input 
                        onChange={(e)=>setFormData({...formData , email : e.target.value})}
                        type='text' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Email"/>
                    </div>

                    <div>
                        <input 
                        onChange={(e)=>setFormData({...formData , firstpass : e.target.value})}
                        type='password' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Password"/>
                    </div>
                    <div>
                        <input 
                        onChange={(e)=>setFormData({...formData , secondpass : e.target.value})}
                        type='password' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Re-Password"/>
                    </div>
                    <div>
                        <select
                            className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                            onChange={(e)=>setFormData({...formData , level : e.target.value})}
                            placeholder='Level Type'
                            >
                            <option hidden> </option>
                            <option value={"LowLevelAuth"}>Low Level Authority</option>
                            <option value={"MiddleLevelAuth"}>Middle Level Authority</option>
                            <option value={"HighLevelAuth"}>High Level Authority</option>
                        </select>
                    </div>

                    <div className="mt-5">
                        <button onClick={handleSubmit} className="p-3 rounded-lg shadow-sm bg-red-800 text-white text-2xl">Register</button>
                    </div>

                </form>
                <ToastContainer/>

            </div>
        </div>
        
        </>
    )
}