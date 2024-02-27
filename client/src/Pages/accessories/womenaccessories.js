import React from 'react'
import { NavLink } from 'react-bootstrap'
import Line from '../../assets/weddingline.png'
import Fade from 'react-reveal'
import Jewlery from '../../assets/women-jewelry.jpg'
import Shoes from '../../assets/women-shoes.jpg'
import Dress from '../../assets/women-dress.jpg'
import Crown from '../../assets/women-crown.jpg'

const womenaccessories = () => {
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

        <div className='jewelry col-6 p-4' >
            <Fade left>
                <div>
                    <NavLink to=''><img src={Jewlery} alt='women-jewelry'/></NavLink>
                    <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙅𝙚𝙬𝙚𝙡𝙧𝙮</h1>
                </div>
            </Fade>
        </div>

        <div className='shoes col-6 p-4'>
            <Fade right>
                <div>
                    <NavLink to=''><img src={Shoes} alt='women-wedding-shoes'/></NavLink>
                    <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙎𝙝𝙤𝙚𝙨</h1>
                </div>
            </Fade>
        </div>

        <div className='dress col-6 p-4'>
            <Fade left>
                <div>
                    <NavLink to =''><img src={Dress} alt='wedding-dress'/></NavLink>
                    <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝘿𝙧𝙚𝙨𝙨</h1>
                </div>
            </Fade>
        </div>

        <div className='crown col-6 p-4'>
            <Fade right>
            <div>
                <NavLink to=''><img src={Crown} alt='wedding-crown'/></NavLink>
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝘾𝙧𝙤𝙬𝙣</h1>
            </div>
            </Fade>
        </div>

    </div>

</div>

    <div className='w-100 py-10'></div>

    </>
  )
}

export default womenaccessories


