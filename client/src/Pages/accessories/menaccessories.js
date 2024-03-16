import React from 'react'
import { Img } from 'react-image'
import { NavLink, h1 } from 'react-bootstrap'
import {CircleLoader} from 'react-spinners'
import Line from '../../assets/weddingline.png'
import Fade from 'react-reveal'
import Necktie from '../../assets/men-necktie.jpg'
import Suits from '../../assets/men-suits.jpg'
import Jewelry from '../../assets/men-jewelry.jpg'
import Shoes from '../../assets/men-shoes.jpg'

const menaccessories = () => {

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
                        <h1 to='' style={{fontSize:"3rem"}}>𝒞𝒽𝑜𝑜𝓈𝑒 𝓌𝒽𝒶𝓉 𝓎𝑜𝓊 𝓌𝒶𝓃𝓉</h1>
                    </div>

                </div>

            </div>
            
        </div>

    </header>
    {/* Header Ends */}


<div className='container border rounded border-0 p-2'>

    <div className='row  text-center'>

        <div className='jewelry col-6 p-4' >
            <Fade left>
            <div>
                <NavLink to=''>
                    <Img
                src={Jewelry}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink> 
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙅𝙚𝙬𝙚𝙡𝙧𝙮</h1>
            </div>
            </Fade>
        </div>

        <div className='shoes col-6 p-4'>
            <Fade right>
            <div>
                    <NavLink to=''>
                        <Img
                    src={Shoes}
                    loader={<MyLoader />}
                    unloader={<MyErrorComponent />}
                        />
                    </NavLink> 
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙎𝙝𝙤𝙚𝙨</h1>
            </div>
            </Fade>
        </div>

        <div className='suit col-6 p-4'>
            <Fade left>
                <div>
                <NavLink to=''>
                        <Img
                    src={Suits}
                    loader={<MyLoader />}
                    unloader={<MyErrorComponent />}
                        />
                    </NavLink> 
                    <h1 className='btn btn-primary d-block w-100    border-0 bg-dark'>𝙎𝙪𝙞𝙩</h1>
                </div>
            </Fade>
        </div>

        <div className='necktie col-6 p-4'>
            <Fade right>
                <div>
                    <NavLink to=''>
                        <Img
                    src={Necktie}
                    loader={<MyLoader />}
                    unloader={<MyErrorComponent />}
                        />
                    </NavLink> 
                    <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙉𝙚𝙘𝙠𝙩𝙞𝙚</h1>
                </div>
            </Fade>
        </div>

    </div>

</div>

    <div className='w-100 py-10'></div>


    </>
  )
}

export default menaccessories


