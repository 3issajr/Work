import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Bounce } from 'react-awesome-reveal';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function AdminDashboard() {

        const username = localStorage.getItem('admin');
        const navigate = useNavigate()
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        const handleLogout = () => {
        axios.get('http://localhost:3000/adminsignout',)
            .then((result) => {
            if (localStorage.getItem('admin') == null  ) {
                toast.warning("Already Logged Out", {position: "top-center"});
            } else {
                toast.success(result.data.message, { position: "top-center", autoClose: 3000});
                localStorage.removeItem('admin');
                setIsLoggedIn(false);
                setTimeout(() => { navigate('/Admin/');},4000);
            }
            })
            .catch((err) => {
            toast.error(err.response.data.error, {position: "top-center" });
            })
        };
        const items = [{ key: '1', label: <a onClick={handleLogout} className='text-3xl'> Logout </a> }];

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
      <div id='dashboard'>

        <div id='dashboard-header' className="flex justify-center items-center">
          <h1 className="text-7xl text-red-800 italic">Dashboard</h1>
        </div>

        <div id='navitems' className="flex justify-center gap-10 mt-20">
          <Link to='/Admin/menu' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Menu</Link>
          <Link to='/Admin/user' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Users</Link>
          <Link to='/Admin/book' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Booking</Link>
          <Link to='/Admin/message' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Message</Link>
          <Link to='/Admin/register' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Add New Admin</Link>
            
          <Dropdown menu={{ items }}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space id='user' className='text-3xl bg-red-800 text-white p-10 rounded-lg shadow-md capitalize '>
              {username}
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
        </div>

      </div>
    </>
  );
}
