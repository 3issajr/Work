import Image from 'next/image'
import img from '../../../public/aboutimg.png'
import { faPhone ,faEnvelope , faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function About(){
    return(
        <>
        <div  id='about' className='container'>
            <div id='aboutimg' className='row'>
        <Image src={img} width={500} height={500} alt='about'/>
            <div id='aboutabs'>
                <h3>Come Visit Us</h3>
                <FontAwesomeIcon icon={faPhone} className='w-5 h-5'/>
                <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5'/>
                <FontAwesomeIcon icon={faLocation} className='w-5 h-5'/>
                
            </div>
            </div>
        </div>
        
        
        </>
    )
}