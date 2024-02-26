import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Line from '../assets/weddingline.png'


const contactus = () => {
  return (
    <>
    <div className='container col-md-8 col-xl-6  text-md-start mx-auto my-5' id='line'>
        <img src={Line}/>
    </div>

    <div className="container col-md-8 col-xl-6 text-center mx-auto">
        <h2 className="w-lg-50">𝐹𝑒𝑒𝓁 𝐹𝓇𝑒𝑒 𝒯𝑜 𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈 𝒜𝓃𝓎𝒯𝒾𝓂𝑒</h2>
    </div>

<section className="position-relative mb-20  mt-3 py-xl-5 text-white">
    
        <div className="container bg-dark rounded py-5">

        <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="w-lg-50">𝒲𝑒'𝓇𝑒 𝑜𝓅𝑒𝓃 𝒻𝑜𝓇 𝒶𝓃𝓎 𝓈𝓊𝑔𝑔𝑒𝓈𝓉𝒾𝑜𝓃 𝑜𝓇 𝒿𝓊𝓈𝓉 𝓉𝑜 𝒽𝒶𝓋𝑒 𝒶 𝒸𝒽𝒶𝓉</h2>
        </div>

            <div className="row d-flex justify-content-center">
                
                <div className="col-md-6 col-lg-4 col-xl-4">
                    
                    <div className="d-flex flex-column justify-content-center align-items-start h-100">
                       
                       
                        <div className="d-flex align-items-center p-3">
                            <BsFillTelephoneFill style={{fontSize:"30px"}} className='border border-white rounded w-10 h-10' />
                            <div className="px-2">
                                <h3 className="mb-0">Phone</h3>
                                <h4 className="mb-0">+123456789</h4>
                            </div>
                        </div>

                        <div className="d-flex align-items-center p-3">
                            <MdEmail style={{fontSize:"30px"}} className='border border-white rounded w-10 h-10' />                                
                            <div className="px-2">
                                <h3 className="mb-0">Email</h3>
                                <h4 className="mb-0">mydaycs@gmail.com</h4>
                            </div>
                        </div>

                        <div className="d-flex align-items-center p-3">
                            <IoLocation style={{fontSize:"30px"}}  className='border border-white rounded w-10 h-10'/>           
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

                            <div className="mb-3">
                                <input 
                                required
                                className="form-control" 
                                type="text" 
                                name="name" 
                                id="name-1" 
                                placeholder="Name" 
                                />
                            </div>

                            <div className="mb-3">
                                <input 
                                required
                                className="form-control" 
                                type="email" id="email-1" 
                                name="email" 
                                placeholder="Email" 
                                />
                            </div>

                            <div className="mb-3">
                                <input 
                                required
                                className="form-control" 
                                type="text"
                                name="subject" 
                                id="subject-1" 
                                placeholder="Subject"
                                />
                            </div>

                            <div className="mb-3">
                                <textarea 
                                required
                                className="form-control" 
                                id="message-1"
                                name="message" 
                                rows="6"
                                placeholder="Message" 
                                />
                             </div>

                            <div>
                                <button 
                                className="btn btn-primary d-block w-100 d-block w-100 
                                transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" 
                                type="submit">
                                Send 
                                </button>
                            </div>

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
