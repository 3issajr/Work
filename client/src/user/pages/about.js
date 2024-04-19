import { Carousel } from 'antd';
import {Fade} from 'react-awesome-reveal'
import CountUp from 'react-countup';

import AboutComponent from '../components/about';  
import Testimonals from '../components/testimonals';  

import BG from '../public/images/aboutbg.png';
import Play from '../public/images/play.png';
import Icon1 from '../public/images/abouticon1.png';
import Icon2 from '../public/images/abouticon2.png';
import Icon3 from '../public/images/abouticon3.png';
import Infoimg from '../public/images/aboutinfoimg.png'
import Infoimg2 from '../public/images/aboutinfoimg2.png'



export default function About() {
    
    const contentStyle = {
        width: '100%',
        height: '100%',
        lineHeight: '100px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius:"30px"
    };

    return (
        <>
            <AboutComponent />

            <div id='aboutpage'>

                <div id='aboutimage'>
                    <img src={BG} width={2000} height={2000} alt='about' className='img' />
                    <div id='playbutton'>
                            <img src={Play} width={150} height={150} alt='playbutton' />
                            <h1 className='text-6xl text-white'>Feel the authentic &<br/> original taste from us</h1>
                    </div>
                </div>

                <div id='boxs' className='md:grid-cols-3'>
                <Fade direction='left' duration={2000}>
                    <div id='box1' className='box'>
                        <img src={Icon1} width={100} height={100} alt='icon' />
                        <div>
                            <h1 className='text-3xl'>Multi Cuisine</h1>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                </Fade>

                <Fade duration={4000}>
                    <div id='box2' className='box'>
                        <img src={Icon2} width={100} height={100} alt='icon' />
                        <div id='test'>
                            <h1 className='text-3xl'>Easy To Order</h1>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                </Fade>

                <Fade direction='right' duration={2000}>
                    <div id='box3' className='box'>
                        <img src={Icon3} width={100} height={100} alt='icon' />
                        <div>
                            <h1 className='text-3xl'>Fast Delivery</h1>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                </Fade>
                </div>

                <div id='mainbox' className='flex justify-center '>

                <div id='test' className='flex flex-col'>

                    <div id='leftbox' className='py-10'>

                        <div id='leftbox-header' >

                            <div >
                                <h1 className='text-4xl font-bold'>A little information for our valuable guest</h1>
                            </div>
                            <br/>
                            <div className='text-start'>
                                <small className='text-xl'>At place, we believe that dining is not just about food, but also about the overall experience.
                                   Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                                </small>
                            </div>

                        </div>

                    </div>

                    <div id='boxes' className='flex justify-start py-5 gap-5' style={{width:"80%"}}>
                    
                    <div className='flex flex-col gap-5'>
                    <Fade direction='down' duration={2000}>
                        <div id='box1' className='border rounded-md  text-center w-52 p-3'>
                            <h1 className='text-3xl'><CountUp end={3} duration={5}/></h1>
                            <p>Locations</p>
                        </div>
                    </Fade>
                    
                    <Fade direction='up' duration={2000}>
                        <div id='box2' className='border rounded-md  text-center w-52 p-3'>
                            <h1 className='text-3xl'><CountUp suffix='+' end={65} duration={3}/></h1>
                            <p>Staff Members</p>
                        </div>
                    </Fade>
                    </div>

                      <div className='flex flex-col gap-5 '>
                        <Fade direction='down' duration={2000}>
                            <div id='box3' className='border rounded-md text-center w-52 p-3'>
                                <h1 className='text-3xl'>1995</h1>
                                <p>Founded</p>
                            </div>
                        </Fade>

                        <Fade direction='up' duration={2000}>
                        <div id='box4' className='border rounded-md  text-center w-52 p-3'>
                            <h1 className='text-3xl'><CountUp suffix='%' end={100} duration={3}/></h1>
                            <p>Satisfied Customers</p>
                        </div>
                        </Fade>
                      </div>

                    </div>

                </div>

                <div id='rightbox' className="bg-black border rounded-md" style={{width:"20%"}}>
                    <Carousel dotPosition='right' autoplay>
                        <div >
                            <img src={Infoimg}  alt='' style={contentStyle} />
                        </div>
                        <div>
                            <img src={Infoimg2}  alt='' style={contentStyle} />
                        </div>
                    </Carousel>
                </div>
            </div>


            <Testimonals/>
                
 
            </div>
        </>
    );
}
