import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import images from './data/menudata'

import Img1 from '../public/images/app1.png'
import Img2 from '../public/images/app2.png'
import Img3 from '../public/images/app3.png'
import Img4 from '../public/images/app4.png'
import Img5 from '../public/images/app5.png'
import Img6 from '../public/images/app6.png'
import Img7 from '../public/images/app7.png'
import Img8 from '../public/images/app8.png'
import Img9 from '../public/images/app9.png'


export default function Menu(){
    
    const navLink = [
        {to:'/' , name:'All'},
        {to:'/breakfast' , name:'Breakfast'},
        {to:'/main' , name:'Main Dishes'},
        {to:'/drinks' , name:'Drinks'},
        {to:'/desserts' , name:'Desserts'},
    ]

    return(
        <>
        <div id='menupage' className='pt-8'>


        <Fade direction='down' duration={2000} >
            <div id='menu-header' className='mt-8'>
                <h1 className="text-7xl">Our Menu</h1>
                <p className='text-center'>We consider all the drivers of change gives you the components <br/> you need to change to create a truly happens.</p>
                <div id='menu-navigation' className="flex flex-wrap justify-center">
                {navLink.map((link) => {
                    return (
                        <Fade direction='up' duration={2000} delay={1500}>
                        <NavLink to={link.to} key={link.name} className="button mx-2 my-1">
                            {link.name}
                        </NavLink>
                        </Fade>
                    );
                })}
                </div>
            </div>
            </Fade>


            <div id='menu-content'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'">

                    {images.map((img , index)=>{
                        return(
                            <>
                            <div id='menuitem' className='shadow-md rounded-md'>
                             <img src={img.src} alt={img.name} className="itemimg w-full"/> 
                                <div id="iteminfo" key={index} className='text-center'>
                                    <p id="price" className="text-2xl ">${img.price}</p>
                                    <p id='name' className="text-xl font-bold ">{img.name}</p>
                                    <p id='info'>{img.info}</p>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    
                </div>
            </div>


            <div id='orderapp' className="mt-2 lg:flex-row lg:items-center lg:justify-between sm:flex-col">

                <div id='leftdiv' className="lg:w-1/3 lg:pr-16 sm:flex-col">
                    <h1 className="text-7xl">You can order through apps</h1>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                </div>

                <div id='rightdiv' className="flex flex-col sm:flex-col lg:w-2/3 lg:pl-16">
                    <div id="firstrow" className="lg:w-1/2 lg:px-4 gap-3">
                        <img src={Img1} alt='ubereats' width={100} height={100} className="appimg"/>
                        <img src={Img2} alt='grubhub' width={100} height={100} className="appimg"/>
                        <img src={Img3} alt='postmates' width={100} height={100} className="appimg"/>
                    </div>

                    <div id='secondrow' className="lg:w-1/2 lg:px-7 gap-5">
                        <img src={Img4} alt='doordash'  width={100} height={100} className="appimg"/>
                        <img src={Img5} alt='foodpanda'  width={100} height={100} className="appimg"/>
                        <img src={Img6} alt='deliveroo'  width={100} height={100} className="appimg"/>
                    </div>

                    <div id="thirdrow" className="lg:w-1/2 lg:px-4 gap-3">
                        <img src={Img7} alt='instacart' width={100} height={100} className="appimg"/>
                        <img src={Img8} alt='justeat' width={100} height={100} className="appimg"/>
                        <img src={Img9} alt='didifood' width={100} height={100} className="appimg"/>
                    </div>
                </div>

            </div>

        </div>
        
        </>
    )
}

