import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import { Alert } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../public/images/logo.png'

export default function AdminHome(){
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const Navigate = useNavigate();
    const [formData , setFormData] = useState({email : '', password : '',})

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3000/adminlogin',formData)
        .then((response)=>{
            console.log(response)
            setAlertMessage(response.data.message);
            setAlertType('success');
            setAlertVisible(true);
            localStorage.setItem('admin',response.data.message.name)
            setTimeout(()=>{Navigate('/admin/dashboard')},2000)
        })
        .catch((err)=>{
            setAlertMessage(err.response.data.error);
            setAlertType('error');
            setAlertVisible(true);
        })
    }

    return(
        <>
        <div id='home' className='bg-slate-50 h-screen' >

            <div className='flex justify-center flex-col items-center text-center'>
                <h1 className="text-7xl text-red-800 italic">Bistro Restaurants Administration</h1>
                <img src={Logo} width={100} height={100} className='mt-10'/>
            </div>

            <Fade direction='up'>
                <div className='text-5xl flex justify-center items-center mt-10'>
                    {alertVisible && ( <Alert  message={alertMessage} type={alertType} closable className='text-3xl' onClose={() => setAlertVisible(false)}/> )}
                </div>
            </Fade>

            <div id='login-form' className="p-10 flex justify-center">


                <form  className="flex  flex-col  justify-center gap-5 p-10 text-center bg-white rounded-lg shadow-lg">
                    <FontAwesomeIcon icon={faUser} className='text-5xl'/>
                    <div id='form-header'>
                        <h1 className="text-5xl text-red-800 font-bold ">Welcome Admin</h1>
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
                        onChange={(e)=>setFormData({...formData , password : e.target.value})}
                        type='password' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Password"/>
                    </div>
                    <div className="mt-5">
                        <button onClick={handleSubmit} className="p-3 w-full rounded-lg shadow-sm bg-red-800 text-white text-2xl">Login</button>
                    </div>
                </form>

            </div>

        </div>
        
        </>
    )
}