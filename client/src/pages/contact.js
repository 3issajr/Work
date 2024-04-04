import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

export default function Contact() {

  return (
    <>
      <div id='contactpage'>

        <div id='contact-header'>
          <Fade direction='down' duration={2000}>
            <div id="login-header" className="flex justify-center text-center flex-col mb-4">
              <h1 className='text-7xl pb-5'>Contact Us</h1>
              <p>We consider all the drivers of change gives you the components<br/> you need to change to create a truly happens.</p>
            </div>
          </Fade>
        </div>

        <div id='contact-form' className='flex justify-center lg:flex-row py-5 px-5'>

            <form className="w-full md:w-1/2"> 

            <div  id='subcontact-form' className='rounded-lg bg-white shadow-md sm:flex-col'>

              <div id='firstrow' className='flex flex-col sm:flex-row justify-between gap-5 p-10'> 
                <div id='name' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold'>Name</label>
                  <input 
                  className='w-full'
                  required
                  type='text'
                  placeholder='Enter Your Name'/>
                </div>

                <div id='email' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold'>Email</label>
                  <input 
                  className='w-full'
                  required
                  type='email'
                  placeholder='Enter Your Email'/>
                </div>
              </div>

              <div id='secondrow' className='flex p-10 '>
                <div id='subject' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold'>Subject</label>
                  <input 
                  className='w-full'
                  required
                  type='text'
                  placeholder='Write Your Subject'/>
                </div>
              </div>

              <div id='thirdrow' className='flex justify-start p-10  '>
                <div id='message' className='flex flex-col w-full'>
                  <label className='text-2xl font-bold' >Message</label>
                  <textarea 
                  required
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

        </div>


        <div id='contactmethods' className='bg-white w-full flex flex-col md:flex-row justify-center  md:justify-evenly gap-5 px-5 py-10 '> {/* Adjust layout for different screensizes and add padding */}

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