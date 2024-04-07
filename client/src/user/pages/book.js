import { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

import { Fade , Bounce } from 'react-awesome-reveal'
import {Alert} from 'antd'

import Location from '../public/images/gps.png'

export default function Book(){
    const [users, setUsers] = useState([]); // State to hold logged in user
    const [redirectToLoginPage, setRedirectToLoginPage] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [formData , setFormData]= useState({ date:'', time:'', name:'', phone:'', persons:'' })

    const handleSubmit = async (e)=>{
        e.preventDefault()

        axios.post('http://localhost:3000/book',formData , {withCredentials:true})

        .then((result)=>{
                setAlertMessage(result.data.message)
                setAlertType('success');
                setAlertVisible(true);
        })
        .catch((err)=>{
                setAlertMessage(err.response.data.error);
                setAlertType('error');
                setAlertVisible(true);       
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
            <div className="text-red-800 text-3xl flex justify-center flex-col items-center h-screen">
                <div className='bg-slate-200 rounded-lg shadow-md font-bold text-center'>
                    <h1 className='text-5xl p-5'>You Must Login First</h1>
                    <NavLink to='/login'>Click To Login</NavLink>
                </div>
            </div>
        </Bounce>
    ) : (
        <div id="bookpage" className='pt-2'>

        <Fade direction='down' duration={2000} >
            <div id='book-header'>
                <h1 className="text-5xl">Book A Table</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
        </Fade>
    

            <Fade direction='left' >
                <div className='text-5xl flex justify-center items-center mt-10  '>
                {alertVisible && (
                        <Alert
                        message={alertMessage}
                        type={alertType}
                        closable
                        className='text-3xl'
                        onClose={() => setAlertVisible(false)}
                        />
                    )}
                </div>
            </Fade>
            
            <div id='location' className='w-full z-1'>
                <img src={Location}  alt='location' className="locationimg w-full"/>
            </div>


            <div id='book-form' className='mt-2 p-5 w-1/3 absolute rounded-lg shadow-md'>

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
            </div>
                  
        </div>
    )}
        </>
    )
}