import axios from 'axios';
import { useState, useEffect } from 'react';
import {Alert} from 'antd'
import {Fade} from 'react-awesome-reveal'

import AdminDashBoard from './AdminDashboard';


export default function AdminBooking(){
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [booking , setBooking] = useState([])

    const handleDeleteMenuItem = (itemId) => {
        axios.delete(`http://localhost:3000/book/${itemId}`)
            .then(response => {
                setBooking(prevBooking => prevBooking.filter(item => item._id !== itemId));
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);
            })
            .catch(error => {
                console.error('Error deleting menu item:', error);
            });
    };

    const updateBookingStatus = async (bookingId, status) => {
        try {
            const response = await axios.put(`http://localhost:3000/book/${bookingId}`, { status });
            setAlertMessage(response.data.message);
            setAlertType('success');
            setAlertVisible(true);
            setTimeout(()=>window.location.reload(),1000)
        } 
        catch (error) {
            setAlertMessage(error.response.data.error);
            setAlertType('error');
            setAlertVisible(true); 
        }
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3000/book');
                setBooking(response.data.booking);
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true)
            }
            catch (error) {
                setAlertMessage(error.response.data.error);
                setAlertType('error');
                setAlertVisible(true);
            }
        };
        fetchBookings();
    }, []);

 

    
    return (
        <>
            <div id='user' className='h-screen'>

                <AdminDashBoard/>

                <Fade direction='up' >
                    <div className='text-5xl flex justify-center items-center my-10'>
                    {alertVisible && (
                            <Alert message={alertMessage} type={alertType} closable className='text-3xl' onClose={() => setAlertVisible(false)} />
                        )}
                    </div>
                </Fade>

 
                <div  className='flex justify-center'>
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