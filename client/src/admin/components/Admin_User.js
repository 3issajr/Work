import axios from 'axios';
import { useState, useEffect } from 'react';
import {Alert} from 'antd'
import {Fade} from 'react-awesome-reveal'

import AdminDashBoard from './AdminDashboard';


export default function AdminUser(){
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [users , setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then(response=>{
            console.log(response)
            setAlertMessage(response.data.message);
            setAlertType('success');
            setAlertVisible(true);
            setUsers(response.data.user)
        })
        .catch(err=>{
            setAlertMessage(err.response.data.error);
            setAlertType('success');
            setAlertVisible(true);
            console.error('Error fetching menu:', error);
        })
    },[])

    return (
        <>
            <div id='user' className='h-screen'>

                <AdminDashBoard/>

                <Fade direction='up' >
                    <div className='text-5xl flex justify-center items-center my-10'>
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

 
                <div  className='flex justify-center'>
                <table className="table-auto text-3xl border-4 border-collapse border-gray-400">
                    <thead >
                        <tr>
                            <th className="px-4 py-2 border-4">ID</th>
                            <th className="px-4 py-2 border-4">Name</th>
                            <th className="px-4 py-2 border-4">Email</th>
                            <th className="px-4 py-2 border-4">Gender</th>
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