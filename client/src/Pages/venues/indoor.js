import React from 'react'
import { NavLink } from 'react-router-dom'
import Line from '../../assets/weddingline.png'
import Fade from 'react-reveal'
import Indoor1 from '../../assets/indoor/indoor1.jpg'
import Indoor2 from '../../assets/indoor/indoor2.jpeg'
import Indoor3 from '../../assets/indoor/indoor3.jpeg'
import Indoor4 from '../../assets/indoor/indoor4.jpeg'

const indoor = () => {
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

        <div className='indoor1 col-6 p-4' >
            <Fade left>
                <div>
                <NavLink to=""><img src={Indoor1} alt='grand nile tower'/></NavLink>
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙂𝙧𝙖𝙣𝙙 𝙉𝙞𝙡𝙚 𝙏𝙤𝙬𝙚𝙧</h1>
                </div>
            </Fade>
        </div>

        <div className='indoor2 col-6 p-4'>
            <Fade right>
                <div>
                <NavLink to=""><img src={Indoor2} alt='royal maxim palace'/></NavLink>
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙍𝙤𝙮𝙖𝙡 𝙈𝙖𝙭𝙞𝙢 𝙋𝙖𝙡𝙖𝙘𝙚 𝙆𝙚𝙢𝙥𝙞𝙣𝙨𝙠𝙞</h1>
                </div>
            </Fade>
        </div>

        <div className='indoor3 col-6 p-4 '>
            <Fade left>
                <div>
                <NavLink to=''><img src={Indoor3} alt='holday inn cairo-maddi'/></NavLink>
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙃𝙤𝙡𝙞𝙙𝙖𝙮 𝙄𝙣𝙣 𝘾𝙖𝙞𝙧𝙤–𝙈𝙖𝙖𝙙𝙞</h1>
                </div>
            </Fade>
        </div>

        <div className='indoor4 col-6 p-4 '>
            <Fade right>
                <div>
                <NavLink to=''><img src={Indoor4} alt='kempinski nile hotel'/></NavLink>
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙆𝙚𝙢𝙥𝙞𝙣𝙨𝙠𝙞 𝙉𝙞𝙡𝙚 𝙃𝙤𝙩𝙚𝙡 𝙂𝙖𝙧𝙙𝙚𝙣 𝘾𝙞𝙩𝙮</h1>
                </div>
            </Fade>
        </div>

    </div>

</div>

    <div className='w-100 py-10'></div>


    </>
  )
}

export default indoor


