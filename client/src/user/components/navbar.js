import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation , useNavigate} from 'react-router-dom';
import axios from 'axios';

import { Bounce, JackInTheBox } from 'react-awesome-reveal';
import { DownOutlined } from '@ant-design/icons';
import Marquee from 'react-fast-marquee';
import { Dropdown,Alert,Space} from 'antd';

import Logo from '../public/images/logo.png';

function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); //State to check user is logged in or not
  const [logoutMessage, setLogoutMessage] = useState(null); // State to hold the logout message
  const [users, setUsers] = useState([]); // State to hold logged in user
  const location = useLocation();
  const navigate = useNavigate(); 
  const pathname = window.location.pathname; //Get the pathname from URL

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

  const handleLogout = () => {
    axios.get('http://localhost:3000/signout', { withCredentials: true })
    .then((result)=>{
      setLogoutMessage(`${result.data.message}`);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setTimeout(() => {setUsers(''); navigate('/'); },);
    })
    .catch((err)=>{
      setLogoutMessage(`${err.reponse.data.error}`);
    })
  };

  const items = [
    {
      key: '1',
      label: <Link to='/profile'>My Account</Link>,
    },
    {
      key: '2',
      label:  <Link to='/mybooking'> My Booking </Link>
    },
    {
      key: '3',
      label:  <a onClick={handleLogout}> Logout </a>
    },
  ];

  function username() {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsers(user);
    }
  }
  
  useEffect(() => { username();}, [location]);
  useEffect(() => { setIsLoggedIn(users.length !== 0);}, [users]);
  useEffect(() => {
    if (logoutMessage) {
      const timer = setTimeout(() => { setLogoutMessage(null); }, 5000);
      return () => clearTimeout(timer); 
    }}, [logoutMessage]); 

  if (!isLoggedIn) {NavLinks.push({ to: '/register', name: 'Register' }); }

  return (
    <>
      <div id="topnav" className={`items-center py-4 px-6 md:px-10 lg:px-20 ${pageBackgroundColors[pathname] || ''}`}>


        <Bounce triggerOnce={false} duration={5000}>
          <div id="logo" className="flex justify-center gap-5">
            <img src={Logo} width={50} height={50} alt="logo" />
            <h1 className="text-5xl italic">Bistro Bliss</h1>
          </div>
        </Bounce>

        <div className="hidden md:flex items-center">
          {NavLinks.map((link) => {
            const isActive = pathname.startsWith(link.to);
            return (
              <NavLink
                to={link.to}
                key={link.name}
                className={ isActive ? 'bg-gray-300 rounded-2xl py-1 px-4 font-bold mr-4' : 'text-black-500 mr-4'}>
                {link.name}
              </NavLink>
            );
          })}
          <JackInTheBox duration={3000}>
            <NavLink to="/book" id="navbtn"> Book A Table </NavLink>
          </JackInTheBox>
        </div>

        <Dropdown menu={{ items }}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space className='text-2xl bg-slate-200 rounded-lg shadow-md capitalize p-2'>
              {users}
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>

        {logoutMessage && ( <Alert className='absolute top-30 right-10 text-xl w-72' banner message={ <Marquee pauseOnHover gradient={false}> {logoutMessage} </Marquee>} /> )}
  
        {/* Media Query Dropdown */}
        <button className="md:hidden focus:outline-none" 
          onClick={() => {document.getElementById('navitems').classList.toggle('hidden');}}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>

      </div>
    </>
  );
}

export default NavBar;
