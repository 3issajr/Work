import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Logo from '../public/images/logo.png'
export default function AdminHome(){
    const Navigate = useNavigate();
    const [formData , setFormData] = useState({
        name : '',
        password : '',
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
        Navigate('/Admin/dashboard')

    }

    console.log(formData)

    return(
        <>
        <div id='home' className='bg-slate-50 h-screen' >

            <div className='flex justify-center flex-col items-center text-center'>
                <h1 className="text-7xl text-red-800 italic">Bistro Restaurants Administration</h1>
                <img src={Logo} width={100} height={100} className='mt-10'/>
            </div>

            <div id='login-form' className="p-10 flex justify-center">


                <form onClick={handleSubmit} className="flex  flex-col  justify-center gap-5 p-10 text-center bg-white rounded-lg shadow-lg">
                    <FontAwesomeIcon icon={faUser} className='text-5xl'/>
                    <div id='form-header'>
                        <h1 className="text-5xl text-red-800 font-bold ">Welcome Admin</h1>
                    </div>
                    <div>
                        <input 
                        onChange={(e)=>setFormData({...formData , name : e.target.value})}
                        type='text' 
                        name='name' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Username"/>
                    </div>

                    <div>
                        <input 
                        onChange={(e)=>setFormData({...formData , password : e.target.value})}
                        type='password' 
                        name='name' 
                        className="rounded-lg p-2 text-2xl text-center border-black border-solid border-4" 
                        placeholder="Password"/>
                    </div>
                    <div className="mt-5">
                        <button className="p-3 w-full rounded-lg shadow-sm bg-red-800 text-white text-2xl">Login</button>
                    </div>
                </form>

            </div>

        </div>
        
        </>
    )
}