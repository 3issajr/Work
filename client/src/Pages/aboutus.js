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

      <div className="container col-md-8 col-xl-6 text-center mx-auto mb-3">
        <h2 className="w-lg-50">𝒲𝒽𝑜 𝒜𝓇𝑒 𝒲𝑒</h2>
    </div>
     
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3" id='aboutus'>

            <div className="col mb-4" id='aboutus-1'>

                <div className="card bg-dark">
                    
                    <img className="card-img-top w-100 d-block fit-cover" src={Image1}/>

                    <div className="card-body p-4">
                        <h5 className="card-text text-center capitalize">At MyDay, we understand that planning your special day can be both exhilarating and overwhelming. That's why we've curated a one-stop online platform dedicated to providing everything you need to make your wedding day truly unforgettable.</h5>
                    </div>

                </div>

            </div>

            <div className="col mb-4" id='aboutus-2'>

                <div className="card bg-dark">

                  <img className="card-img-top d-block fit-cover" src={Image3}/>

                    <div className="card-body p-4">
                        <h5 className="card-text text-center capitalize">we've handpicked a collection of trusted vendors and resources to streamline your planning process. Our mission is to empower couples to navigate the intricate world of wedding planning effortlessly, ensuring that every detail reflects their unique love story.</h5>
                    </div>

                </div>

            </div>

            <div className="col mb-4" id='aboutus-3'>

                <div className="card bg-dark h-100">
                    
                    <img className="card-img-top w-100 d-block fit-cover" src={Image2}/>

                    <div className="card-body p-4">
                        <h5 className="card-text text-center capitalize">At MyDay, we believe that every love story deserves to be celebrated in style.From the moment you browse our website to the day you say "I do," we're here to assist you in bringing your dream wedding to life.</h5>
                    </div>

                </div>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default aboutus
