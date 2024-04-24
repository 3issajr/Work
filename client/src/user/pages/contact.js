import { useState } from 'react';
import axios from 'axios'
import { Fade } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Contact() {
  const [formData , setFormData] =useState ({name : '', email: '', subject:'', message:'' })


 const handleSubmit = async (e)=>{
  e.preventDefault()
  axios.post('http://localhost:3000/contact',formData)
    .then((result)=>{
      console.log(result)
      toast.success(result.data.message, {
        position: "top-center",
        autoClose: 2000
    });
    })
    .catch((err)=>{
      toast.error(err.response.data.error, {
        position: "top-center"
    });
    })
  }

  return (
    <>
      <div id='contactpage'>

        <div id='contact-header'>
          <Fade direction='down' duration={2000}>
            <div id="login-header" className="flex justify-center text-center flex-col pt-10">
              <h1 className='text-7xl pb-5'>Contact Us</h1>
              <p>We consider all the drivers of change gives you the components<br/> you need to change to create a truly happens.</p>
            </div>
          </Fade>
        </div>

        <div id='contact-form' className='flex justify-center lg:flex-row py-5 px-5 '>

            <form className="xs:w-5/6 w-1/2 xxs:w-full" onSubmit={handleSubmit}> 

            <div  id='subcontact-form' className='rounded-lg bg-white shadow-md sm:flex-col '>

              <div id='firstrow' className='flex flex-col  justify-between gap-5 p-10'> 
                <div id='name' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold'>Name</label>
                  <input 
                  onChange={(e)=>setFormData({...formData , name : e.target.value})}
                  className='w-full'
                  type='text'
                  placeholder='Enter Your Name'/>
              </div>

                <div id='email' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold'>Email</label>
                  <input 
                  onChange={(e)=>setFormData({...formData , email : e.target.value})}
                  className='w-full'
                  type='email'
                  placeholder='Enter Your Email'/>
                </div>
              </div>

              <div id='secondrow' className='flex p-10 '>
                <div id='subject' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold'>Subject</label>
                  <input 
                  onChange={(e)=>setFormData({...formData , subject : e.target.value})}
                  className='w-full'
                  type='text'
                  placeholder='Write Your Subject'/>
                </div>
              </div>

              <div id='thirdrow' className='flex justify-start p-10  '>
                <div id='message' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold' >Message</label>
                  <textarea 
                  onChange={(e)=>setFormData({...formData , message : e.target.value})}
                  rows={5} 
                  className="w-full" 
                  />
                </div>
              </div>

              <div id='contactbtn' className='pb-4 flex justify-center w-full'>
                <button className='w-5/6 md:w-full text-2xl rounded-full text-white p-2'>Send</button> {/* Ensure button width fills the container */}
              </div>

            </div>
        
            </form>
            <ToastContainer position="top-center" />

        </div>

        <div id='contactmethods' className='bg-white w-full flex justify-center gap-10 px-5 py-10'> {/* Adjust layout for different screensizes and add padding */}

           <div id='call' className='text-start flex flex-col gap-5 '>
              <h1 className='text-2xl font-light'>Call us:</h1>
              <p className='text-xl font-bold text-red-700'>+1-234-567-8900</p>
           </div>

           <div id='workinghours' className='text-start flex flex-col gap-5'>
            <h1 className='text-2xl font-light'>Hours:</h1>
            <p>Mon-Fri: 11am - 8pm <br/> Sat, Sun: 9am - 10pm</p>
           </div>

           <div id='location' className='text-start flex flex-col gap-5'>
            <h1 className='text-2xl font-light'>Our Location</h1>
            <p>123 Bridge Street <br/>Nowhere Land, LA 12345<br/> United States</p>
           </div>

        </div>

      </div>
    </>
  )
}
