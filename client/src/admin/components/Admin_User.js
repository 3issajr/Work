import AdminDashBoard from './AdminDashboard';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Bounce } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export default function AdminUser(){
    const [users , setUsers] = useState([])
    const username = localStorage.getItem('admin');

    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then(response=>{ 
            toast.success(response.data.message);
            setUsers(response.data.users)
          
        })
        .catch(error=>{
            toast.error(error.response.data.error);
        })
    },[])

    const handleDeleteMenuItem = (itemId) => {
        axios.delete(`http://localhost:3000/user/${itemId}`)
            .then(response => {
                setUsers(prevUsers => prevUsers.filter(item => item._id !== itemId));
                toast.success(response.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.error);
            });
    };

     
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
    return (
        <>
            <div id='user' className='h-screen'>

            <ToastContainer position="top-center" autoClose="2000" style={{width:"20rem"}}/>
                <AdminDashBoard/>
 
                <div  className='flex justify-center p-32'>
                <table className="table-auto text-3xl border-4 border-collapse border-gray-400">
                    <thead >
                        <tr>
                            <th className="px-4 py-2 border-4">ID</th>
                            <th className="px-4 py-2 border-4">Name</th>
                            <th className="px-4 py-2 border-4">Email</th>
                            <th className="px-4 py-2 border-4">Gender</th>
                            <th className="px-4 py-2 border-4">Phone</th>
                            <th className="px-4 py-2 border-4">Action</th> 
                        </tr>
                    </thead>
                    <tbody className='border border-collapse border-gray-400'>
                        {users.map(user => (
                            <tr key={user._id}> 
                                <td className="px-4 py-2 border-4">{user._id}</td>
                                <td className="px-4 py-2 border-4">{user.name}</td>
                                <td className="px-4 py-2 border-4">{user.email}</td>
                                <td className="px-4 py-2 border-4">{user.gender}</td>
                                <td className="px-4 py-2 border-4">{user.phone}</td>
                                <td className="px-4 py-2 border-4">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteMenuItem(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

            </div>
        </>
    );
}