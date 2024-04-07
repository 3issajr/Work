import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../public/images/aboutimg.png'

export default function About() {
  return (
    <div id='about' className='grid grid-cols-1 md:grid-cols-2 gap-8'>
 
        <div id='aboutimg' className='flex justify-center items-center'>
          <img src={img} width={500} height={500} alt='about' />
        </div>
      <div id='aboutside' className='flex flex-col justify-center'>

        <h1 className='text-4xl md:text-6xl pb-5 text-center md:text-left'>
          We provide healthy food for your family.
        </h1>
        <p id='aboutside-p1' className='text-sm md:text-lg text-center md:text-left'>
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture,
          we aim to honor our local roots while infusing a global palate.
        </p>
        <br />
        <p id='aboutside-p2' className='text-sm md:text-lg text-center md:text-left'>
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>

      </div>
  
    <div id='aboutabs' className='md:col-span-2 mt-8 text-center md:text-left'>


      <div id='aboutabs-header'>
        <h3>Come and Visit Us</h3>
      </div>

      <div id='phone' className='flex items-center mt-4'>
        <div><FontAwesomeIcon icon={faPhone} className='w-5 h-5'/></div>
        <p className='ml-2'>(414) 857 - 0107</p>
      </div>

      <div id='envelope' className='flex items-center mt-4'>
        <div><FontAwesomeIcon icon={faEnvelope} className='w-5 h-5'/></div>
        <p className='ml-2'>happytummy@restaurant.com</p>
      </div>

      <div id='location' className='flex items-center mt-4'>
        <div><FontAwesomeIcon icon={faLocation} className='w-5 h-5'/></div>
        <p className='ml-2'>837 W. Marshall Lane Marshalltown,<br/> IA 50158, Los Angeles</p>
      </div>


    </div>
  
  </div>
  )
}
