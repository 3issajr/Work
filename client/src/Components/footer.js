import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <>
    <footer className="bg-dark text-white">

        <div className="container">

            <ul className="list-inline">
                <li className="list-inline-item me-3"><NavLink to='/aboutus' className='nav-link' style={{fontSize:"1.5rem"}}>About Us</NavLink></li>
                <li className="list-inline-item"><NavLink to='/team' className='nav-link' style={{fontSize:"1.5rem"}}>Teams</NavLink></li>
            </ul>

            <ul className="list-inline">
                <li className="list-inline-item me-4">
                    <FaFacebookF className='facebook w-10 h-10'/>
                </li>

                <li className="list-inline-item me-4">
                    <FaTwitter className='twitter w-10 h-10'/>
                </li>

                <li className="list-inline-item me-4">
                  <FaInstagram className='instagram w-10 h-10'/>
                </li>
            </ul>

            <p className="mb-0">Copyright © 2024 MyDay</p>
        </div>

        
            <div className="subscribe border rounded border-0  d-flex flex-column justify-content-center align-items-center flex-lg-row p-0 p-lg-5">

                <div className="text-center text-lg-start  py-lg-1">
                    <h2 className="fw-bold ">Subscribe to our newsletter &nbsp;</h2>
                </div>

                <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post" >
                    <div className="my-2"><input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Your Email"/></div>
                    <div className="my-2"><button className="btn btn-primary shadow ms-2 d-block w-100 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="submit">Subscribe </button></div>
                </form>

            </div>
        

    </footer>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <Outlet/>
    </>
  )
}

export default footer
