import React , {useEffect , useState} from 'react';
import { NavLink , useLocation } from 'react-router-dom';
import axios from 'axios'

import {Bounce , JackInTheBox} from 'react-awesome-reveal'
import Logo from "../public/images/logo.png";
import { DownOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd'

function NavBar() {

  const NavLinks = [
    { to: "/home", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/menu", name: "Menu" },
    { to: "/blogs", name: "Pages" },
    { to: "/contact", name: "Contact" },
    { to: "/register", name: "Register" },
  ];

  const pageBackgroundColors = {
    "/": "bg-customColor",
    "/home": "bg-customColor",
    "/about": "bg-customColor",
    "/menu": "bg-white",
    "/blogs": "bg-customColor",
    "/blogs/:id": "bg-customColor",
    "/book": "bg-white",
    "/register": "bg-customColor",
    "/login": "bg-customColor",
    "/contact": "bg-customColor",
  };

  const handleLogout = () => {
    axios.get('http://localhost:3000/signout',{withCredentials:true})
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setTimeout(()=>{setUsers('');},1000)
  }

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" >
          My Account
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" onClick={handleLogout}>
          Logout 
        </a>
      ),
    },

  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users , setUsers] = useState([]);
  const location = useLocation();
  const pathname = window.location.pathname;

 
  function username (){
    const loggedInUser = localStorage.getItem('user')
    if(loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsers(user)
    } 
  }

  useEffect(()=>{username()},[location])

  return (
    <>
{/* If there are users */}
{
users.length !== 0 ?  (
  <div id="topnav" className={`items-center py-4 px-6 md:px-10 lg:px-20 ${pageBackgroundColors[pathname] || ""}`}>

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
            className={isActive ? "bg-gray-300 rounded-2xl py-1 px-4 font-bold mr-4" : "text-black-500 mr-4"}>
            {link.name}
          </NavLink>
        );
      })}
      <JackInTheBox duration={3000}>
        <NavLink to="/book" id="navbtn">
          Book A Table
        </NavLink>
      </JackInTheBox>
    </div>

    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {users}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>

    <button
      className="md:hidden focus:outline-none"
      onClick={() => {
        document.getElementById("navitems").classList.toggle("hidden");
      }}
    >
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
    </button>
  </div>

  // if there are no users
) : (
  <div id="topnav" className={`items-center py-4 px-6 md:px-10 lg:px-20 ${pageBackgroundColors[pathname] || ""}`}>
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
            className={isActive ? "bg-gray-300 rounded-2xl py-1 px-4 font-bold mr-4" : "text-black-500 mr-4"}
          >
            {link.name}
          </NavLink>
        );
      })}
      <JackInTheBox duration={3000}>
        <NavLink to="/book" id="navbtn">
          Book A Table
        </NavLink>
      </JackInTheBox>
    </div>

    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {users}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>

    <button
      className="md:hidden focus:outline-none"
      onClick={() => {
        document.getElementById("navitems").classList.toggle("hidden");
      }}
    >
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
    </button>
  </div>
)}




    </>
  );
}

export default NavBar;
