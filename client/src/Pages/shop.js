import React from 'react'
import Line from '../assets/weddingline.png'
import {Fade} from 'react-reveal'

const shop = () => {
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


<div className='container  border rounded border-0 p-2'>
    <div className='row  text-center'>
        <div className='venues col-6 p-4' >
            <Fade left>
                <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 border-0 bg-dark'>𝙑𝙚𝙣𝙪𝙚𝙨</h1>
            </Fade>
        </div>
        <div className='accessories col-6 p-4'>
            <Fade right>
                <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 border-0 bg-dark'>𝘼𝙘𝙘𝙚𝙨𝙨𝙤𝙧𝙞𝙚𝙨</h1>
            </Fade>
        </div>
        <div className='photographers col-6 p-4'>
            <Fade left>
                <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 border-0 bg-dark'>𝙋𝙝𝙤𝙩𝙤𝙜𝙧𝙖𝙥𝙝𝙚𝙧𝙨</h1>
            </Fade>
        </div>
        <div className='videographers col-6 p-4'>
            <Fade right>
                <h1 className=' btn btn-primary d-block w-100  border-0 bg-dark'>𝙑𝙞𝙙𝙚𝙤𝙜𝙧𝙖𝙥𝙝𝙚𝙧𝙨</h1>
            </Fade>
        </div>
    </div>
</div>

    <div className='w-100 py-10'></div>

{/* <div className='container'>
    <div className='row  gap-1 text-center'>
        <div className='col w-30 h-100 '>
            <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 bg-blue-500'>Venues</h1>
        </div>
        <div className='col w-30 h-100 '>
            <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 bg-blue-500'>Accessories</h1>
        </div>
        <div className='col w-30 h-100 '>
            <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 bg-blue-500'>Photographers</h1>
        </div>
        <div className='col w-30 h-100 '>
            <h1 className='btn btn-primary d-block w-100 transition ease-in-out delay-150 bg-blue-500'>Videographers</h1>
        </div>
    </div>  
</div> */}
    </>
  )
}

export default shop


