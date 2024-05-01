import { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { Fade , Bounce } from 'react-awesome-reveal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Location from '../public/images/gps.png'

export default function Book(){
    const [users, setUsers] = useState([]); // State to hold logged in user
    const [redirectToLoginPage, setRedirectToLoginPage] = useState(null);
    const [formData , setFormData]= useState({ date:'', time:'', name:'', phone:'', persons:'' })

    const handleSubmit = async (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/book',formData , {withCredentials:true})
        .then((result)=>{
            toast.success(result.data.message, {position: "top-center", autoClose: 2000});
        })
        .catch((err)=>{
            toast.error(err.response.data.error, {position: "top-center"});
          })
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
          setRedirectToLoginPage(true); 
          const user = JSON.parse(loggedInUser);
          setUsers(user);
        }
      }, []);
  
return(
    <>
        {redirectToLoginPage ? (
        <Bounce>
            <div className="text-red-800 text-3xl flex justify-center flex-col items-center h-screen ">
                <div className='bg-slate-200 rounded-lg shadow-md font-bold text-center'>
                    <h1 className='text-5xl p-5'>You Must Login First</h1>
                    <NavLink to='/login'>Click To Login</NavLink>
                </div>
            </div>
        </Bounce>
    ) : (
        <div id="bookpage" className='pt-5'>

            <Fade direction='down' duration={2000} >
                <div id='book-header'>
                    <h1 className="text-7xl">Book A Table</h1>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
            </Fade>
    
            
            <div id='location' className='w-full z-1'>
                <img src={Location}  alt='location' className="locationimg w-full"/>
            </div>

            <div id='book-form' className='mt-16 p-5 w-1/3 absolute rounded-lg shadow-md'>

                <form className='flex justify-center flex-col' >
                    <table className='w-auto'>
                        <tr>
                            <td className="text-2xl">Date</td>
                            <td className="text-2xl">Time</td>
                        </tr>
                        
                        <td>
                            <input 
                            onChange={(e)=>setFormData({...formData, date:e.target.value})}
                            required
                            type='date'/>
                        </td>
                        
                        <td>
                            <select onChange={(e)=>setFormData({...formData, time:e.target.value})}>
                                <option value='' hidden></option>
                                <option value='6:30'>6:30</option>
                                <option value='7:30'>7:30</option>
                                <option value='8:30'>8:30</option>
                            </select>
                        </td>
                        <tr>
                            <td className="text-2xl">Name</td>
                            <td className="text-2xl">Phone</td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                onChange={(e)=>setFormData({...formData, name:e.target.value})}
                                required
                                type='text' 
                                placeholder="Please Enter Your Name"/>
                            </td>
                            <td>
                                <input 
                                onChange={(e)=>setFormData({...formData, phone:e.target.value})}
                                required
                                type='text' 
                                placeholder="x-xxx-xxx-xxx"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-2xl'>Total Persons</td>
                        </tr>
                        <tr>
                            <td colSpan={5} >
                                <select onChange={(e)=>setFormData({...formData, persons:e.target.value})}>
                                    <option value={''} hidden> </option>
                                    <option value={1}> 1 Person</option>
                                    <option value={2}> 2 Person</option>
                                    <option value={3}> 3 Person</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                        <div id='book-button' className='p-5'>
                            <button className='w-full text-white p-2 rounded-full' onClick={handleSubmit}>Book A Table</button>
                        </div>

                </form>
                <ToastContainer/>

            </div>
                  
        </div>
    )}
        </>
    )
}