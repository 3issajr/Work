import React from 'react'
import { NavLink } from 'react-router-dom'
import { Img } from 'react-image'
import {CircleLoader} from 'react-spinners'
import Line from '../../assets/weddingline.png'
import Fade from 'react-reveal'
import Outdoor1 from '../../assets/outdoor/outdoor1.jpeg'
import Outdoor2 from '../../assets/outdoor/outdoor2.jpeg'
import Outdoor3 from '../../assets/outdoor/outdoor3.jpeg'
import Outdoor4 from '../../assets/outdoor/outdoor4.jpeg'

const outdoor = () => {

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

        <div className='outdoor1 col-6 p-4' >
            <Fade left>
                <div>
                <NavLink to=''>
                    <Img
                src={Outdoor1}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink>               
                <h1 className='btn btn-primary d-block w-100 border-0 bg-dark'>𝙉𝙪̄𝙩 𝘽𝙤𝙪𝙩𝙞𝙦𝙪𝙚 𝙁𝙖𝙧𝙢 𝙇𝙤𝙙𝙜𝙚</h1>
                </div>
            </Fade>
        </div>

        <div className='outdoor2 col-6 p-4'>
            <Fade right>
                <div>
                <NavLink to=''>
                    <Img
                src={Outdoor2}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink>  
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙 𝘼𝙡𝙞 𝙋𝙖𝙨𝙝𝙖 𝙋𝙖𝙡𝙖𝙘𝙚</h1>
                </div>
            </Fade>
        </div>

        <div className='outdoor3 col-6 p-4 '>
            <Fade left>
                <div>
                <NavLink to=''>
                    <Img
                src={Outdoor3}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink>  
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙈𝙖𝙧𝙧𝙞𝙤𝙩𝙩 𝙈𝙚𝙣𝙖 𝙃𝙤𝙪𝙨𝙚, 𝘾𝙖𝙞𝙧𝙤</h1>
                </div>
            </Fade>
        </div>

        <div className='outdoor4 col-6 p-4 '>
            <Fade right>
                <div>
                <NavLink to=''>
                    <Img
                src={Outdoor4}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                    />
                </NavLink>  
                <h1 className='btn btn-primary d-block w-100  border-0 bg-dark'>𝙁𝙤𝙪𝙧 𝙎𝙚𝙖𝙨𝙤𝙣𝙨 𝙃𝙤𝙩𝙚𝙡 𝙖𝙩 𝙉𝙞𝙡𝙚 𝙋𝙡𝙖𝙯𝙖</h1>
                </div>
            </Fade>
        </div>

    </div>

</div>

    <div className='w-100 py-10'></div>


    </>
  )
}

export default outdoor


