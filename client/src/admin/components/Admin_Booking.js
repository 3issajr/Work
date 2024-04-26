import AdminDashBoard from './AdminDashboard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Bounce } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function AdminBooking(){
    const username = localStorage.getItem('admin');
    const [booking , setBooking] = useState([])

    const handleDeleteMenuItem = (itemId) => {
        axios.delete(`http://localhost:3000/book/${itemId}`)
            .then(response => {
                setBooking(prevBooking => prevBooking.filter(item => item._id !== itemId));
                toast.success(response.data.message, {position: "top-center", autoClose: 2000 });
            })
            .catch(error => {
                toast.error(error.response.data.error, { position: "top-center"});
            });
    };

    const updateBookingStatus = async (bookingId, status) => {
        try {
            const response = await axios.put(`http://localhost:3000/book/${bookingId}`, { status });
            toast.success(response.data.message, {position: "top-center", autoClose: 2000 });
            setTimeout(()=>window.location.reload(),1000)
        } 
        catch (error) {
            toast.error(error.response.data.error, { position: "top-center"});
        }
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3000/book');
                setBooking(response.data.booking);
                toast.success(response.data.message, {position: "top-center", autoClose: 2000 });
            }
            catch (error) {
                toast.error(error.response.data.error, { position: "top-center"});
            }
        };
        fetchBookings();
    }, []);

 
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

                <AdminDashBoard/>
                <ToastContainer position="top-center" style={{width:"20rem"}} />


                <div  className='flex justify-center p-32'>
                <table className="table-auto text-3xl border-4 border-collapse border-gray-400">
                    <thead >
                        <tr>
                            <th className="px-4 py-2 border-4">Email</th>
                            <th className="px-4 py-2 border-4">Name</th>
                            <th className="px-4 py-2 border-4">Time</th>
                            <th className="px-4 py-2 border-4">Date</th>
                            <th className="px-4 py-2 border-4">Phone</th> 
                            <th className="px-4 py-2 border-4">Persons</th> 
                            <th className="px-4 py-2 border-4">Status</th>
                            <th className="px-4 py-2 border-4">Actions</th> 
                        </tr>
                    </thead>
                    <tbody className='border border-collapse border-gray-400 text-center'>
                        {booking.map(book => (
                            <tr key={book._id}> 
                                <td className="px-4 py-2 border-4">{book.email}</td>
                                <td className="px-4 py-2 border-4">{book.name}</td>
                                <td className="px-4 py-2 border-4">{book.time}</td>
                                <td className="px-4 py-2 border-4">{book.date}</td>
                                <td className="px-4 py-2 border-4">{book.phone}</td>
                                <td className="px-4 py-2 border-4">{book.persons}</td>
                                <td className="px-4 py-2 border-4">{book.status}</td>
                                <td className="px-4 py-2 border-4">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteMenuItem(book._id)}>Delete</button>
                                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mx-3" onClick={() => updateBookingStatus(book._id, 'accepted')}>Accept</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateBookingStatus(book._id, 'rejected')}>Reject</button>
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