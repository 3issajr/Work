import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Profile from '../assets/profile.jpg'




const team = () => {
  return (
    <>

    <div className="container py-4 py-xl-5 mb-15">

        <div className="row mb-4 mb-lg-5 ">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h1>Our Team</h1>
            </div>
        </div>


        <div className="row py-3 row-cols-2 row-cols-md-4  justify-center">
            <div className="col">
                <div className="card border-0 shadow-none">
                    <div className="card-body text-center d-flex flex-column align-items-center p-4 bg-dark"><img className="rounded-circle mb-3 fit-cover" width="300" height="300" src={Profile}/>
                        <h5 className="fw-bold text-primary card-title mb-0"><strong>Ahmed Eissa</strong></h5>
                        <p className="card-text mb-2 text-primary"><strong>Team Leader</strong></p>
                        <ul className="list-inline fs-6 text-muted w-100 mb-0">
                            <li className="list-inline-item text-center text-white">
                                <div className="d-flex flex-column align-items-center">
                                <FaFacebookF style={{fontSize:"30px"}}/>
                                </div>
                            </li>
                            <li className="list-inline-item text-center text-white">
                                <div className="d-flex flex-column align-items-center">
                                <FaTwitter style={{fontSize:"30px"}}/>
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
