import AdminDashBoard from "./AdminDashboard"

import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import { Alert } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminRegister(){
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const Navigate = useNavigate()

    const [formData , setFormData] = useState({name : "", email : "", firstpass:"", secondpass:"", level:""})


    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3000/adminregister',formData)
        .then((response)=>{
            setAlertMessage(response.data.message);
            setAlertType('success');
            setAlertVisible(true);
            setTimeout(() => {
                Navigate('/Admin/dashboard')
            }, 2000);
        })
        .catch((err)=>{
            setAlertMessage(err.response.data.error);
            setAlertType('error');
            setAlertVisible(true);
            console.log(err)
        })
    }
    return(
        <>
        <div id = 'register'>
            <AdminDashBoard/>

            <Fade direction='up'>
                <div className='text-5xl flex justify-center items-center mt-10'>
                    {alertVisible && ( <Alert  message={alertMessage} type={alertType} closable className='text-3xl' onClose={() => setAlertVisible(false)}/> )}
                </div>
            </Fade>

            <div id = 'register-form'>
                
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
            </div>
        </div>
        
        </>
    )
}