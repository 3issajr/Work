'use client';

import React  from 'react'
import { Slide , Fade} from 'react-reveal'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image4 from '../assets/image4.jpg'
import Avatar1 from '../assets/avatar2.jpg'
import Avatar2 from '../assets/avatar4.jpg'
import Line from '../assets/weddingline.png'

const Index = () => {

   
  return (
    <>

<div className='container col-md-8 col-xl-6  text-md-start mx-auto mt-5' id='line'>
    <img src={Line}/>
</div>


    {/* Header Start */}
    <header className="container bg-primary-gradient my-2">

        <div className="container pt-4 pt-xl-5">

            <div className="row pt-5">
                
                <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">

                    <div className='container text-center'>
                        <h1 style={{fontSize:"3rem"}}>𝑀𝒶𝓀𝑒 𝒴𝑜𝓊𝓇 𝒟𝒶𝓎 𝐸𝒶𝓈𝒾𝓁𝓎 </h1>
                    </div>

                </div>

            </div>
            
        </div>

    </header>
    {/* Header Ends */}
    
    {/* Intro Starts */}
    <section className="container py-4 py-xl-5">

        {/* First Box Starts */}
        <div className="container">

            <div className="bg-dark border rounded  border-dark overflow-hidden ">
               
                <Slide right>

                <div className="row g-0">

                    <div className="col-md-6">

                        <div className="text-white p-4 p-md-5">

                            <h2 className="fw-bold text-center text-white mb-5">Love is in the Air: A Wedding Festival</h2>
                            <h2 className="mb-5 text-center">Outdoor Wedding</h2>

                                <div className="my-3 d-flex justify-center">
                                    <button className="d-flex btn btn-info btn-lg me-2 animate-bounce " role="button" href="#">See More &nbsp;<FaArrowRight className='mt-2'/></button>
                                </div>

                        </div>

                    </div>

                    <div className="col-md-6 order-first order-md-last" style={{minHeight: "250px"}}>
                        <img className="w-100 h-96 fit-cover" src={Image1}/>
                    </div>

                </div>

                </Slide>

            </div>

        </div>
        {/* First Box Ends */}

        <div className="container mt-5">

            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">

            {/* Second Box Starts */}
            <Slide left>

                <div className="row g-0">

                    <div className="col-md-6 " style={{minHeight: "250px"}}>
                        <img className="w-100 h-96 fit-cover" src={Image2}/>
                    </div>

                    <div className="col-md-6">

                        <div className="text-white p-4 p-md-5">

                            <h2 className="fw-bold text-center text-white mb-5">Celebrating the Love: A Wedding to Remember</h2>
                            <h2 className="mb-5 text-center">Indoor Wedding</h2>
                            <div className="my-3 text-center d-flex justify-center">
                                <button className="d-flex btn btn-info btn-lg me-2 animate-bounce " role="button" href="#">See More &nbsp;<FaArrowRight className='mt-2'/></button>
                            </div>

                        </div>

                    </div>

                </div>

            </Slide>
            {/* Second Box Ends */}


        </div>

    </div>

        {/* Third Box Starts */}
        <div className="container mt-5">

            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">

            <Slide right>

                <div className="row g-0">

                    <div className="col-md-6">

                        <div className="text-white p-4 p-md-5">

                            <h2 className="fw-bold text-center text-white mb-5">With Love, Joy, and Happiness: The Wedding of Bride and Groom</h2>
                            <h2 className="mb-5 text-center">Wedding Tables</h2>

                            <div className="my-3 d-flex justify-center">
                                <button className="d-flex btn btn-info btn-lg me-2 animate-bounce" role="button" href="#">See More &nbsp;<FaArrowRight className='mt-2'/></button>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 order-first order-md-last" style={{minHeight: "250px"}}>
                        <img className="w-100 h-96 fit-cover" src={Image4}/>
                    </div>

                </div>

            </Slide>

            </div>

        </div>
        {/* Third Box Ends */}

    </section>
    {/* Intro Ends */}


    {/* What Can we Do starts*/}
    <section className=' '>
        
        {/* Header Start */}
        <div className="container my-10">
            
            <div className="row">

                <div className="container col-md-8 col-xl-6 text-center mx-auto mt-5">
                    <h1 style={{fontSize:"3rem"}}>𝒲𝒽𝒶𝓉 𝓌𝑒 𝒸𝒶𝓃 𝒹𝑜 𝒻𝑜𝓇 𝓎𝑜𝓊</h1>
                </div>

            </div>
        {/* Header End */}

        {/* First Box Starts*/}
            <div className="py-5 p-lg-5 text-center">
                
                <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px;"}}>

                    <div className="col-md-6 mb-5">

                        <div className="card shadow-sm bg-dark text-white">

                            <div className="card-body px-4 py-5 px-md-5">
                                <Fade>
                                    <h3 className="fw-bold card-title">Easy To Book&nbsp;</h3>
                                    <h4 className="card-text mb-4">Book your Wedding Components</h4>
                                    <button className="btn btn-info btn-lg shadow " type="button">Book Now</button>
                                </Fade>
                            </div>

                        </div>

                    </div>
            {/* First Box Ends*/}

            {/* Second Box Starts */}
                    <div className="col-md-6 mb-5">

                        <div className="card shadow-sm bg-dark text-white">

                            <div className="card-body px-4 py-5 px-md-5  ">
                                <Fade>
                                    <h3 className="fw-bold card-title">Easy To Buy&nbsp;</h3>
                                    <h4 className="mb-4">Buy Suits, Dress and Accessories</h4>
                                    <button className="btn btn-info btn-lg shadow" type="button">Buy Now</button>
                                </Fade>
                            </div>

                        </div>

                    </div>
            {/* Second Box Ends */}

            {/* Third Box Starts */}
                    <div className="col-md-6 mb-5">

                        <div className="card shadow-sm bg-dark text-white ">

                            <div className="card-body px-4 py-5 px-md-5 text-white">
                                <Fade>
                                    <h3 className="fw-bold card-title">Easy To Watch&nbsp;</h3>
                                    <h4 className="card-text mb-4">Check our Indoor/Outdoor Venues</h4>
                                    <button className="btn btn-info btn-lg shadow " type="button">Watch Now</button>
                                </Fade>
                            </div>

                        </div>

                    </div>
            {/* Third Box Ends */}

            {/* Fourth Box Starts */}
                    <div className="col-md-6 mb-5">

                        <div className="card shadow-sm bg-dark text-white ">

                            <div className="card-body px-4 py-5 px-md-5">
                                <Fade>
                                    <h3 className="fw-bold card-title">Easy Payment&nbsp;</h3>
                                    <h4 className="card-text mb-4">We Accept Visa Payment or Cash Payment</h4>
                                    <button className="btn btn-info btn-lg shadow" type="button">Buy Now</button>
                                </Fade>
                            </div>

                        </div>

                    </div>
            {/* Fourth Box Ends */}

                </div>

            </div>

        </div>

    </section>
    {/* What can we do Ends */}

    {/* Testimonals start */}
    <section className='container mt-7 mb-7'>
        
        <div className="container py-12">

            {/* Header Starts */}
            <div className="row mb-5">

                <div className="container col-md-8 col-xl-6 text-center mx-auto">
                    <h1 className="mb-2" style={{fontSize:"3rem"}}>𝒯𝑒𝓈𝓉𝒾𝓂𝑜𝓃𝒾𝒶𝓁𝓈</h1>
                </div>

            </div>
            {/* Header Ends */}


            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-around border rounded border-0  py-3">

            {/* First Comment Starts */}
                <div className="col mb-4">

                    <div className="d-flex flex-column align-items-center align-items-sm-start">

                        <p className="bg-body-tertiary border rounded p-4 fw-bold">Imagine Planning Your Day with just one click! </p>

                        <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="100" height="100" src={Avatar1}/>

                            <div>
                                <h5 className="fw-bold text-primary text-white">John Smith</h5>
                            </div>

                        </div>

                    </div>

                </div>
                {/* First Comment Ends */}

                {/* Second Comment Starts */}
                <div className="col mb-4">

                    <div className="d-flex flex-column align-items-center align-items-sm-start">

                        <p className="bg-body-tertiary border rounded p-4 fw-bold">What an Easy Wedding Day Prepartion</p>

                        <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="100" height="100" src={Avatar2}/>

                            <div>
                                <h5 className="fw-bold text-primary text-white">John Smith</h5>
                            </div>

                        </div>

                    </div>

                </div>
                {/* Second Comment Ends */}

            </div>
            
        </div>

    </section>
    {/* Testimonals Ends */}


    {/* Contactus Starts */}
    <section className="container col-12 col-md-12 col-xl-12 my-5 py-4 py-xl-5">

            <div className="container bg-dark">

                <div className="border rounded-2 border-0  d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">

                    <div className="pb-2 pb-lg-1 text-center">
                        <h2 className="fw-bold mb-2">Not sure which serivce you need?</h2>
                        <h3 className="mb-0">Contact Us AnyTime</h3>
                    </div>

                    <div className="my-2 text-center">
                        <NavLink to='/contactus' className="btn btn-info fs-5 py-2 px-4 " role="button" >Contact us</NavLink>
                    </div>

                </div>

            </div>

    </section>
    {/* Contactus Ends */}

    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>

      
    </>
  )
}

export default Index
