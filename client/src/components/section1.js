import React from 'react'
import banner from '../assets/images/banner-image.jpg'

const section1 = () => {
  return (
    <>
    <div className='banner container px-28  flex justify-between mt-44 mx-auto'>

        <div className='banner-text'>
            <h3>WELCOME TO LUGX</h3>
            <h1>BEST <span className='gaming'>GAMING</span> SITE EVER</h1>
            <p>
                LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. 
                You can download and use this layout for commercial purposes. 
                Please tell your friends about TemplateMo.
            </p>

            <div className='search flex  mt-7'>
                <input type='text'placeholder='Type Something'></input>
                <div className='btn'>
                <button>SEARCH NOW</button>
                </div>
            </div>
        </div>

        <div className='banner-image'>
            <img src={banner}/>
        </div>

    </div>
    </>
  )
}

export default section1
