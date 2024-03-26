import Image from 'next/image'; // Import Image component from Next.js
import Logo from '../../../public/hero.png'
export default function Hero(){
    
    return(
        <>
        <div className='container'>

            <div id='hero' className='row'>

            <Image 
                src={Logo}
                alt="hero"
                width={1200}
                height={900}
                style={{position:"relative"}}/>
            </div>

            <div id='image-caption'>
                <p style={{fontSize:"45px"}}>Best food for <br/> your taste</p>
                <p>Discover delectable cuisine and unforgettable moments <br/>sin our welcoming culinary haven</p>
                <div id='img-btn'>
                    <button id='btn1' >Book A Table</button>
                    <button id='btn2' >Explore Menu</button>
                </div>
            </div>

        </div>
        </>
    )
}