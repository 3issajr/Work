import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bounce } from 'react-awesome-reveal';

export default function UserBook() {
    const [book, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = localStorage.getItem('user')

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/userbook', {
                    withCredentials: true,
                    headers: {'Authorization': `${token}`}
                });
                setBooking(response.data.booking);
                setLoading(false);
             
            } catch (error) {
                if(!user){
                    setError("You Must Login First")
                }
                else{
                    setError(error.response.data.error);
                }
                setLoading(false);
            }
        };
        fetchBooking();
    }, []);
    
    

    if (loading) {
        return(
        <div className="text-red-800 text-3xl flex justify-center items-center h-screen">
            <h1 className='bg-slate-200 text-5xl p-5 rounded-lg shadow-md font-bold'>Loading...</h1>
        </div>
        )
    }

    if (error) {
        return(
        <Bounce>
            <div className="text-red-800 text-3xl flex justify-center items-center h-screen">
                <div className='bg-slate-200 rounded-lg shadow-md font-bold text-center'>
                <h1 className=' text-5xl p-5 '>{error}</h1>
                <NavLink to='/login'>Click To Login</NavLink>
                </div>
            </div>
        </Bounce>
        )
    }

    return (
     
        <div id='userbook' className="flex justify-center items-center h-screen">

            <div id='profile-content' className='bg-slate-200 px-10 py-6 rounded-lg'>
                <h1 className='text-4xl font-bold mb-4 text-center'>My Bookings</h1>

                
            {book.map(book => (
                <div key={book._id} className='grid grid-cols-2 gap-4 p-5'>
                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Name:</label>
                        <span>{book.name}</span>
                    </div>

                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Time:</label>
                        <span>{book.time}</span>
                    </div>

                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Date:</label>
                        <span>{book.date}</span>
                    </div>

                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Phone:</label>
                        <span>{book.phone}</span>
                    </div>

                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Total Persons:</label>
                        <span>{book.persons}</span>
                    </div>

                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Status:</label>
                        {book.status === 'accepted' ? ( <span className='text-green-500 font-bold'>{book.status}</span> ) 
                        : (book.status === 'pending' ? (<span className='text-yellow-500 font-bold'>{book.status}</span>) 
                        : (<span className='text-red-500 font-bold'>{book.status}</span>)
                        )}
                    </div>
                </div>
            ))}


            </div>

        </div>
    );
}
