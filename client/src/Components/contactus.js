import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



const contactus = () => {
  return (
    <>

<section className="position-relative mb-20  mt-3 py-xl-5 text-white">
        <div className="container bg-dark rounded py-5">

            <div className="row mb-16">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2 className="w-lg-50">Feel Free To Contact Us AnyTime.</h2>
                </div>
            </div>
            
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="d-flex flex-column justify-content-center align-items-start h-100">
                       
                        <div className="d-flex align-items-center p-3">
                            <BsFillTelephoneFill style={{fontSize:"30px"}} />
                            <div className="px-2">
                                <h3 className="mb-0">Phone</h3>
                                <h4 className="mb-0">+123456789</h4>
                            </div>
                        </div>

                        <div className="d-flex align-items-center p-3">
                            <MdEmail style={{fontSize:"30px"}} />                                
                            <div className="px-2">
                                <h3 className="mb-0">Email</h3>
                                <h4 className="mb-0">mydaycs@gmail.com</h4>
                            </div>
                        </div>

                        <div className="d-flex align-items-center p-3">
                            <IoLocation style={{fontSize:"30px"}} />           
                            <div className="px-2">
                                <h3 className="mb-0">Location</h3>
                                <h4 className="mb-0">NewCairo</h4>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-4">
                    <div>
                        <form className="p-3 p-xl-4" method="post">
                            <div className="mb-3"><input className="form-control" type="text" id="name-1" name="name" placeholder="Name"/></div>
                            <div className="mb-3"><input className="form-control" type="email" id="email-1" name="email" placeholder="Email"/></div>
                            <div className="mb-3"><textarea className="form-control" id="message-1" name="message" rows="6" placeholder="Message"/></div>
                            <div><button className="btn btn-primary d-block w-100" type="submit">Send </button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      
    </>
  )
}

export default contactus
