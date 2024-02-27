import React from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import Slide from 'react-reveal/Slide';
import { Nav } from 'react-bootstrap';


const navbar = () => {
  
  return (
    <>
    <div>

<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" >

  <div className="container-fluid"  >

{/* Brand Name */}
    <Slide left><NavLink to='/home' className='nav-link' style={{fontSize:"2.5rem",color:"#FEECE2"}}>𝑀𝓎𝒟𝒶𝓎</NavLink></Slide>
  
{/* Shopping Cart */}
    <NavLink to='/home' className='me-24' style={{fontSize:"2.5rem",color:"#FEECE2"}}><CiShoppingCart /></NavLink>

{/* Side Menu */}
    <button  className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">


      <div className="offcanvas-header">
        <h5 className="title" id="offcanvasNavbarLabel">Ahmed Eissa</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body" >

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >

          <li className="nav-item">
            <NavLink to='/home' className='nav-link'>Home</NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink to="" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </NavLink>

            <ul className="dropdown-menu px-2">

            <li><NavLink to='/shop2' className='nav-link dropdown-item text-white'>Photographers</NavLink></li>
            <li><NavLink to='/shop3' className='nav-link dropdown-item text-white'>Videographers</NavLink></li>

            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle disabled text-white' href="/venues#" role='button' data-bs-toggle="dropdown" aria-expanded="false" >
                Venues
              </a>
                <ul className="dropdown-submenu px-3">
                  <li><NavLink to='/indoor' className='dropdown-item'>Indoor Wedding</NavLink></li>
                  <li><NavLink to='/outdoor' className='dropdown-item'>Outdoor Weeding</NavLink></li>
                </ul>
              </li>


              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle disabled text-white' href='#' role='button' data-bs-toggle="dropdown" aria-expanded="false">
                Accessories
                </a>
                <ul className="dropdown-submenu px-3">
                  <li><NavLink to='/womenaccessories' className='dropdown-item'>Bride</NavLink></li>
                  <li><NavLink to='/menaccessories' className='dropdown-item'>Groom</NavLink></li>
                </ul>
              </li>

              

            </ul>
          </li>

          <li className="nav-item">
          <NavLink to='/cart' className='nav-link'>Cart</NavLink>
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
