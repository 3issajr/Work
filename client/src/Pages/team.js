import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Profile from '../assets/profile.jpg'
import Line from '../assets/weddingline.png'

const team = () => {
  return (
    <>

    <div className='container col-md-8 col-xl-6  text-md-start mx-auto my-5' id='line'>
        <img src={Line} alt="weddingline"/>
    </div>

    <div className="container col-md-8 col-xl-6 text-center mx-auto">
        <h1>𝒪𝓊𝓇 𝒯𝑒𝒶𝓂</h1>
    </div>

    <div className="team container py-xl-5">

        <div className="row py-3 row-cols-2 row-cols-md-4  justify-center">

            <div className="col">

                <div className="card border-0 shadow-none">

                    <div className="card-body text-center d-flex flex-column align-items-center p-4 bg-dark">
                        <img className="rounded-circle mb-3 fit-cover" width="450" height="450" src={Profile} alt="profile"/>
                        <h5 className="italic my-2"><strong>Ahmed Eissa</strong></h5>
                        <p className="italic my-2 mb-4"><strong>Team Leader</strong></p>
                        
                        <ul className="list-inline fs-6 text-muted w-100 mb-0">
                            <li className="list-inline-item text-center text-white">
                                <div className="d-flex flex-column align-items-center">
                                    <FaFacebookF style={{fontSize:"30px"}}/>
                                </div>
                            </li>

                            <li className="list-inline-item text-center text-white">
                                <div className="d-flex flex-column align-items-center">
                                    <FaInstagram style={{fontSize:"30px"}}/>
                                </div>
                            </li>  
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </div>
    
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    
    </>
  )
}

export default team
