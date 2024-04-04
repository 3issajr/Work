import { faClock, faPercentage, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img1 from '../public/images/content1.png'
import img2 from '../public/images/content2.png'
import img3 from '../public/images/content3.png'

export default function Content() {
  return (
    <div id='content' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

      <div className="md:col-span-2 lg:col-span-1">
        <img src={img1} width={500} height={200} alt='man-cooking' />
      </div>

      <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 gap-8">
        <div>
          <img src={img2} width={300} height={300} alt='man-cooking' />
        </div>

        <div>
          <img src={img3} width={300} height={200} alt='man-cooking' />
        </div>
      </div>

      <aside className="md:col-span-2 lg:col-span-3">

        <h1 className='text-4xl md:text-6xl font-bold mb-3'>Fasted Food Delivery in City</h1>
        <p className='text-sm md:text-base mt-3 md:mt-5'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>

        <div className='mt-5 md:mt-8 grid grid-cols-1 md:grid-rows-3 gap-4'>

          <div id='clock' className='flex items-center'>
            <div className='bg-red-500 rounded-full p-1'>
              <FontAwesomeIcon icon={faClock} className='w-6 h-6 text-white'/>
            </div>
            <p className='text-sm md:text-base ml-3'>Best Offer & Prices</p>
          </div>

          <div id='percentage' className='flex items-center'>
            <div className='bg-red-500 rounded-full p-1'>
              <FontAwesomeIcon icon={faPercentage} className='w-6 h-6 text-white'/>
            </div>
            <p className='text-sm md:text-base ml-3'>Best Offer & Prices</p>
          </div>

          <div id='cart' className='flex items-center'>
            <div className='bg-red-500 rounded-full p-1'>
              <FontAwesomeIcon icon={faCartShopping} className='w-6 h-6 text-white'/>
            </div>
            <p className='text-sm md:text-base ml-3'>Online Services Available</p>
          </div>

        </div>

      </aside>

    </div>
  )
}
