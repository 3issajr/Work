import React from 'react'
import { NavLink } from 'react-router-dom'
import { Img } from 'react-image'
import {CircleLoader} from 'react-spinners'
import Line from '../assets/weddingline.png'
import Fade from 'react-reveal'
import Image1 from '../assets/bride.jpg'
import Image2 from '../assets/groom.jpg'

const Category = () => {

     // Placeholder component displayed while the image is loading
   const MyLoader = () => <div className='d-flex justify-center align-middle'><CircleLoader/></div>;
    
   // Component displayed if the image fails to load
   const MyErrorComponent = () => <div><h1>Error loading image.</h1></div>;

  return (
    <>

<div className='container col-md-8 col-xl-6  text-md-start mx-auto mt-5' id='line'>
    <img src={Line}/>
</div>


    {/* Header Start */}
    <header className="container bg-primary-gradient my-4">

        <div className="container pt-4 pt-xl-5">

            <div className="row pt-5">
                
                <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">

                    <div className='container text-center'>
                        <h1 style={{fontSize:"3rem"}}>𝒞𝒽𝑜𝑜𝓈𝑒 𝓌𝒽𝒶𝓉 𝓎𝑜𝓊 𝓌𝒶𝓃𝓉</h1>
                    </div>

                </div>

            </div>
            
        </div>

    </header>
    {/* Header Ends */}


<div className='container border rounded border-0 p-2'>

    <div className='row  text-center'>

        <div className='bride col-6 p-4' >
            <Fade left>
                <div>
                <NavLink to='/womenaccessories'>
                    <Img
                src={Image1}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink>                
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝘽𝙧𝙞𝙙𝙚</h1>
                </div>
            </Fade>
        </div>

        <div className='groom col-6 p-4'>
            <Fade right>
                <div>
                <NavLink to='/menaccessories'>
                    <Img
                src={Image2}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink>                
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙂𝙧𝙤𝙤𝙢</h1>
                </div>
            </Fade>
        </div>

    </div>

</div>

    <div className='w-100 py-10'></div>


    </>
  )
}

export default Category


