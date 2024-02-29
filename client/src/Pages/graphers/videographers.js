import React from 'react'
import { NavLink } from 'react-router-dom'
import Line from '../../assets/weddingline.png'
import Fade from 'react-reveal'
import Image1 from '../../assets/videographers/kirolos.jpg'
import Image2 from '../../assets/videographers/mahmoud ahmed.jpg'

const videographers = () => {
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

        <div className='kirolos col-6 p-4' >
            <Fade left>
                <div>
                <NavLink to=""><img src={Image1} alt='kirolos videographer'/></NavLink>
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙆𝙞𝙧𝙤𝙡𝙤𝙨 𝙈𝙞𝙘𝙝𝙚𝙖𝙡</h1>
                </div>
            </Fade>
        </div>

        <div className='mahmoud col-6 p-4'>
            <Fade right>
                <div>
                <NavLink to=""><img src={Image2} alt='mahmoud ahmed videographer'/></NavLink>
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙈𝙖𝙝𝙢𝙤𝙪𝙙 𝘼𝙝𝙢𝙚𝙙</h1>
                </div>
            </Fade>
        </div>

    </div>

</div>

    <div className='w-100 py-10'></div>


    </>
  )
}

export default videographers


