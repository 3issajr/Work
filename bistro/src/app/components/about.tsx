import Image from 'next/image'
import { faPhone ,faEnvelope , faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img from '../../../public/aboutimg.png'

export default function About(){
    return(
        <>
        <div  id='about' className=' align-middle grid-cols-2'>

            <div id='aboutimg' className='row'>
                <Image src={img} width={500} height={500} alt='about'/>
            <div id='aboutabs' className='grid grid-rows-3'>

                <div id='aboutabs-header'><h3 >Come and Visit Us</h3></div>

                <div id='phone'>
                <div><FontAwesomeIcon icon={faPhone} className='w-5 h-5'/></div>
                <p>(414) 857 - 0107</p>
                </div>

                <div id='envelope'>
                <div><FontAwesomeIcon icon={faEnvelope} className='w-5 h-5'/></div>
                <p>happytummy@restaurant.com</p>
                </div>

                <div id='location'>
                <div><FontAwesomeIcon icon={faLocation} className='w-5 h-5'/></div>
                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                </div>

            </div>

            </div>

            <aside id='aboutside'>

                <h1 className='text-6xl pb-5'>We provide healthy food for your family.</h1>

                <p id='aboutside-p1'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, 
                    we aim to honor our local roots while infusing a global palate.
                </p>

                <br/>

                <p id='aboutside-p2'>
                At place, we believe that dining is not just about food,
                 but also about the overall experience. Our staff, renowned for their warmth and dedication,
                 strives to make every visit an unforgettable event.
                </p>

            </aside>

        </div>
        
        
        </>
    )
}