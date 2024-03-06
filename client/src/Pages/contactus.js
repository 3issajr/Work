import React, { useState } from 'react'
import CreateRoot from "react-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Reveal } from 'react-reveal';
import Line from '../assets/weddingline.png'
import Logo from '../assets/contactusimage.png'
import axios from 'axios'


const Contactus = () => {
    const [name,setName]= useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        const contactRequest = {name,email,subject}
        axios.post('http://localhost:3000/contactus',contactRequest)

        .then((result)=>{
            console.log(result)
            if(result.status===201){
                document.getElementById('name').value=''
                document.getElementById('email').value=''
                document.getElementById('message').value=''

            const success= (
                <Reveal>
                 <p>{result.data.message}</p>
                </Reveal>
            );
            CreateRoot.render(success, document.getElementById('message'))
            }
        })

        .catch((err)=>{
            console.log(err)
            const error= (
                <Reveal>
                 <p>{err.response.data.error}</p>
                </Reveal>
            )
            CreateRoot.render(error, document.getElementById('message'))
        })
    }
  return (
    <>
    <div className='container col-md-8 col-xl-6  text-md-start mx-auto my-5' id='line'>
        <img src={Line}/>
    </div>

    <div className="container text-center my-5">
        <h2 className="w-lg-50">𝐹𝑒𝑒𝓁 𝐹𝓇𝑒𝑒 𝒯𝑜 𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈 𝒜𝓃𝓎𝒯𝒾𝓂𝑒</h2>
    </div>

    <section class="container bg-dark position-relative mb-5 w-50 border border-0 rounded-4 " id='contactus' >

        <div class="container position-relative">

                <div id="message" className='container flex justify-center pt-2 font-extrabold text-2xl'style={{borderRadius:"10px",color:"red"}}></div>

            <div class="row justify-center col-md-6 col-md-12 col-sm-12 ">

                <div class="col-xl-6 pt-5"><img src={Logo} width="736" height="574"/></div>

                <div class="col-md-6 col-xl-5 col-md-12 col-sm-12">


                    <div className='mb-3'>
                        <form onSubmit={handleSubmit} class="p-3 p-xl-4" method="post">

                            <h1 className='text-center'>Contact us</h1>
                        
                            <div class="mb-3">
                                <h2 class="form-label" for="name">Name</h2>
                                <input 
                                class="form-control" 
                                type="text" id="name" 
                                name="name" 
                                placeholder='Enter Your Name'
                                onChange={(e)=>setName(e.target.value)}
                                />
                            </div>

                            <div class="mb-3">
                                <h2 class="form-label" for="email">Email</h2>
                                <input 
                                class="form-control" 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder='Enter Your Email'
                                onChange={(e)=>setEmail(e.target.value)}
                                 />
                            </div>

                            <div class="mb-3">
                                <h2 class="form-label" for="message">Message</h2>
                                <textarea 
                                class="form-control text-center" 
                                id="message" 
                                name="message" 
                                rows="6" 
                                placeholder='Write Your Subject'
                                onChange={(e)=>setSubject(e.target.value)}
                                ></textarea>
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

                    <div className=' d-flex justify-center flex-row gap-5 col-12 col-md-12 col-sm-12'>

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

export default Contactus
