import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Bounce } from 'react-awesome-reveal';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newGender, setNewGender] = useState(''); 
    const [newPhone, setNewPhone] = useState(''); 
    const [showUpdateForm, setShowUpdateForm] = useState(false); // New state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
                const response = await axios.get('http://localhost:3000/profile', {
                    withCredentials: true,
                    headers: {'Authorization': `${token}`}
                });
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);    

    const handleUpdateProfile = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:3000/profile/${userId}`, {
                name: newName,
                email: newEmail,
                gender: newGender,
                phone : newPhone
            }, {
                withCredentials: true,
                headers: {'Authorization': `${token}`}
            });
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            setTimeout(()=>navigate('/login'),2000)
            setProfile(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

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
                <h1 className=' text-5xl p-5 '>You Must Login First</h1>
                <NavLink to='/login'>Click To Login</NavLink>
                </div>
            </div>
        </Bounce>
        )
    }
    
    return (
        <div id='profile' className="flex justify-center items-center h-screen">
            <div id='profile-content' className='bg-slate-200 px-10 py-6 rounded-lg'>
                <h1 className='text-4xl font-bold mb-4 text-center'>Profile</h1>
                <div className='flex flex-col gap-4 p-5'>
                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Name:</label>
                        <p>{profile.name}</p>
                    </div>
                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Email:</label>
                        <p>{profile.email}</p>
                    </div>
                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Gender:</label>
                        <p>{profile.gender}</p>
                    </div>
                    <div className='flex items-center p-5'>
                        <label className='mr-4'>Mobile:</label>
                        <p>{profile.phone}</p>
                    </div>
                    <div className='flex items-center gap-5 pt-2'>
                        <button onClick={() => setShowUpdateForm(prevState => !prevState)} className='p-2 border-solid shadow-md bg-red-800 rounded-lg text-white'>
                            {showUpdateForm ? "Close Form" : "Update Form"}
                        </button>   
                        <button className='p-2 border-solid shadow-md bg-red-800 rounded-lg text-white'>Change Password</button>
                        <button className='p-2 border-solid shadow-md bg-red-800 rounded-lg text-white'>Forgot Password</button>
                    </div>
                </div>
            </div>

            {showUpdateForm && (
                <div id='update-profile-form' className='bg-slate-200 px-10 py-6 rounded-lg m-5'>
                    <h1 className='text-4xl font-bold mb-4 text-center'>Update Profile</h1>
                    <div className='flex flex-col gap-4 p-5 '>
                        <div className='flex items-center p-5'>
                            <label className='mr-4'>Name:</label>
                            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                        </div>
                        <div className='flex items-center p-5'>
                            <label className='mr-4'>Email:</label>
                            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        </div>
                        <div className='flex items-center p-5'>
                            <label className='mr-4'>Gender:</label>
                            <input type="text" value={newGender} onChange={(e) => setNewGender(e.target.value)} />
                        </div>
                        <div className='flex items-center p-5'>
                            <label className='mr-4'>Mobile:</label>
                            <input type="text" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
                        </div>
                        <div className='flex items-center gap-5 pt-2'>
                            <button onClick={()=>handleUpdateProfile(profile.id)} className='p-2 border-solid shadow-md bg-red-800 rounded-lg text-white'>Update Profile</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
