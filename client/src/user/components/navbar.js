import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Bounce, JackInTheBox } from 'react-awesome-reveal';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../public/images/logo.png';

function NavBar() {
  const [users, setUsers] = useState([]); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = window.location.pathname; 

  const NavLinks = [
    { to: '/home', name: 'Home' },
    { to: '/about', name: 'About' },
    { to: '/menu', name: 'Menu' },
    { to: '/blogs', name: 'Pages' },
    { to: '/contact', name: 'Contact' },
  ];

  const pageBackgroundColors = {
    '/': 'bg-customColor',
    '/home': 'bg-customColor',
    '/about': 'bg-customColor',
    '/menu': 'bg-white',
    '/blogs': 'bg-customColor',
    '/blogs/:id': 'bg-customColor',
    '/book': 'bg-white',
    '/register': 'bg-customColor',
    '/login': 'bg-customColor',
    '/contact': 'bg-customColor',
  };

  if (!isLoggedIn) { NavLinks.push({ to: '/register', name: 'Register' }); }

  const handleLogout = () => {
    axios.get('http://localhost:3000/signout', { withCredentials: true })
      .then((result) => {
        if (result.data.message === 'Already logged out') {
          toast.warning(result.data.message, {position: "top-center" });
        } else {
          toast.success(result.data.message, {position: "top-center",autoClose: 3000 });
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setTimeout(() => { setUsers(''); navigate('/login'); });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, { position: "top-center"});
      })
  };

  const items = [
    {
      key: '3',
      label: <Link to='/book' className='lg:hidden md:hidden '> Book A Table </Link>
    },
    {
      key: '1',
      label: <Link to='/profile'>My Account</Link>,
    },
    {
      key: '2',
      label: <Link to='/mybooking'> My Booking </Link>
    },
    {
      key: '4',
      label: <a onClick={handleLogout}> Logout </a>
    },
  ];

  function username() {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsers(user);
    }
  }

  useEffect(() => { username(); }, [location]);
  useEffect(() => { setIsLoggedIn(users.length !== 0); }, [users]);



  return (
    <>
      <div id="topnav" className={`items-center py-4 px-6 ${pageBackgroundColors[pathname] || ''}`}>

        <Bounce triggerOnce={false} duration={5000}>
          <div id="logo" className="flex justify-center gap-5">
            <img src={Logo} width={50} height={50} alt="logo" />
            <h1 className="text-5xl italic">Bistro Bliss</h1>
          </div>
        </Bounce>

        <div id='navitems' className=" flex items-center xs:grid xs:grid-cols-3 xxs:grid grid-cols-3">
          {NavLinks.map((link) => {
            const isActive = pathname.startsWith(link.to);
            return (
              <NavLink
                id='navlink'
                to={link.to}
                key={link.name}
                className={isActive ? 'bg-gray-300 rounded-2xl  py-1 px-2  font-bold mr-4' : 'text-black-500 mr-4'}>
                {link.name}
              </NavLink>
            );
          })}
        </div>

        <JackInTheBox duration={3000}>
          <NavLink to="/book" id="navbtn" className=' sm:hidden xs:hidden xxs:hidden'> Book A Table </NavLink>
        </JackInTheBox>

        <Dropdown menu={{ items }}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space id='user' className='text-xl bg-slate-200 rounded-lg shadow-md capitalize p-2'>
              {users}
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>


      </div>
    </>
  );
}

export default NavBar;
