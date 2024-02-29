import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Line from '../assets/weddingline.png'
import Logo from '../assets/1000139094-removebg-preview.png'


const contactus = () => {
  return (
    <>
    <div className='container col-md-8 col-xl-6  text-md-start mx-auto my-5' id='line'>
        <img src={Line}/>
    </div>

    <div className="container col-md-8 col-xl-6 text-center mx-auto mb-3">
        <h2 className="w-lg-50">𝐹𝑒𝑒𝓁 𝐹𝓇𝑒𝑒 𝒯𝑜 𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈 𝒜𝓃𝓎𝒯𝒾𝓂𝑒</h2>
    </div>

    <section class="container bg-dark position-relative mb-5 w-50 border border-0 rounded-4 " id='contactus' >

        <div class="container position-relative">

            <div class="row justify-center">

                <div class="col-xl-6 pt-5"><img src={Logo} width="736" height="574"/></div>

                <div class="col-md-6 col-xl-5">

                    <div>
                        <form class="p-3 p-xl-4" method="post">

                            <h1 className='text-center'>Contact us</h1>
                        
                            <div class="mb-3">
                                <h2 class="form-label" for="name">Name</h2>
                                <input class="form-control" type="text" id="name" name="name" placeholder='Enter Your Name'/>
                            </div>

                            <div class="mb-3">
                                <h2 class="form-label" for="email">Email</h2>
                                <input class="form-control" type="email" id="email" name="email" placeholder='Enter Your Email'/>
                            </div>

                            <div class="mb-3">
                                <h2 class="form-label" for="message">Message</h2>
                                <textarea class="form-control text-center" id="message" name="message" rows="6" placeholder='Write Your Subject'></textarea>
                            </div>

                            <div class="mb-3">
                                <button class="btn btn-info 
                                shadow  d-block w-100 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" 
                                type="submit">Send
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

                    <div className='p-3 p-xl-4 d-flex justify-center flex-row gap-5'>

                        <div id='location' className=''>
                            <IoLocation id='contact-icon'></IoLocation>
                            <p>New Cairo</p>
                        </div>

                        <div id='email' className=''>
                            <MdEmail id='contact-icon'></MdEmail>
                            <p>MyDayCS@gmail.com</p>
                        </div>

                        <div id='telephone' className=''>
                            <BsFillTelephoneFill id='contact-icon'></BsFillTelephoneFill>
                            <p>+12345678</p>
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
