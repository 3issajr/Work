import React from 'react'
import Line from '../assets/weddingline.png'
import Image1 from '../assets/aboutus1.jpg'
import Image2 from '../assets/aboutus2.jpg'
import Image3 from '../assets/aboutus3.jpg'

const aboutus = () => {
  return (
    <>

    <div className='container col-md-8 col-xl-6  text-md-start mx-auto mt-5' id='line'>
      <img src={Line}/>
    </div>

      <div className="container py-4 py-xl-5">

        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h1>𝓌𝒽𝑜 𝒶𝓇𝑒 𝓌𝑒</h1>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col mb-4">
                <div className="card bg-dark"><img className="card-img-top w-100 d-block fit-cover" src={Image1}/>
                    <div className="card-body p-4">
                        <h5 className="card-text text-center capitalize">Welcome to our online wedding website, a place where you can join us in celebrating our special day. We have created this website to share our love story, details about the wedding day, and to provide a space for our friends and family to share their well wishes with us.</h5>
                       
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card bg-dark">
                  <img className="card-img-top d-block fit-cover" src={Image3}/>
                    <div className="card-body p-4">
                        <h5 className="card-text text-center capitalize">We have included a schedule of events, a section to share stories about our relationship, and a place to share photos and videos from the day. We have also included a section for our virtual guests to leave their well wishes and a link to the livestream of the ceremony.</h5>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card bg-dark h-100"><img className="card-img-top w-100 d-block fit-cover" src={Image2}/>
                    <div className="card-body p-4">
                        <h5 className="card-text text-center capitalize">Our website was built with the intention of including all of our loved ones, even those who couldn't join us in person. We wanted to create a platform that was easy to navigate, visually appealing, and customizable to fit our unique needs.</h5>
                      
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default aboutus
