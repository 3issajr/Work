import React from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import Slide from 'react-reveal/Slide';


const navbar = () => {
  return (
    <>
    <div>

<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" >

  <div className="container-fluid"  >

{/* Brand Name */}
    <Slide left><NavLink to='/home' className='nav-link' style={{fontSize:"2.5rem",color:"#FEECE2"}}>𝑀𝓎𝒟𝒶𝓎</NavLink></Slide>
  
{/* Shopping Cart */}
    <NavLink to='/home' className='me-24 ' style={{fontSize:"2.5rem",color:"#FEECE2"}}><CiShoppingCart /></NavLink>

{/* Side Menu */}
    <button  className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>

    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >

      <div className="offcanvas-header">
        <h5 className="title" id="offcanvasNavbarLabel">Ahmed Eissa</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body" >

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
          <li className="nav-item">
            <NavLink to='/home' className='nav-link'>Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/product' className='nav-link' >Products</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/service' className='nav-link'>Services</NavLink>
          </li>

          <li className="nav-item">
          <NavLink to='/contactus' className='nav-link'>Contact Us</NavLink>
          </li>

          <li className="nav-item">
          <NavLink to='/aboutus' className='nav-link'>About Us</NavLink>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul className="dropdown-menu px-2">
              <li><NavLink to='/signup' className='nav-link'>Sign up</NavLink></li>
            </ul>
          </li>

        </ul>

      </div>

    </div>

  </div>

</nav>

    </div>

<Outlet/>

    </>
  )
}

export default navbar
