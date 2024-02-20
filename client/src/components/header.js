import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../assets/images/logo.png'
import React from 'react'
import axios from 'axios'
const Header = () => {
   
  const navigate = useNavigate();
  const [users , setUsers] = useState([]);
  const [image , setImage] = useState([])

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        setUsers(user)
      }
    },[])

    const handleLogout = () => {
      setTimeout(() => { localStorage.clear(); navigate('/home');window.location.reload();}, 1000); 
      }
  
  return (
    <>
    {
      users.length !== 0  ?  
      
      <header className='container mx-auto px-28 pt-20 flex justify-between'>

      <img src={logo} alt='lugx'/>

      <ul className='flex gap-5'>
         <li><NavLink to='/' className="nav-item">Home</NavLink></li>
         <li><NavLink to='/addproduct' className="nav-item">Add Product</NavLink></li>
         <li><NavLink to='/shop' className="nav-item">Shop</NavLink></li>
         <li><NavLink to='/cart' className="nav-item">Cart</NavLink></li>

       <div className='flex flex-col'>
         <h5>Welcome, {users}</h5>
         <button className='btn btn-danger w-20 mx-4 mt-1' onClick={handleLogout}>Logout</button>
       </div>
       
      </ul>
      
     </header>

     : 
     <header className='container mx-auto px-28 pt-20 flex justify-between'>

     <img src={logo} alt='lugx'/>

     <ul className='flex gap-5'>
        <li><NavLink to='/' className="nav-item">Home</NavLink></li>
        <li><NavLink to='/shop' className="nav-item">Shop</NavLink></li>
        <li><NavLink to='/signin' className="nav-item">Sign in</NavLink></li>
     </ul>

    </header>
    }


    <Outlet/>
    </>
  )
}

export default Header
