import Image from 'next/image'
import { faClock , faPercentage , faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img1 from '../../../public/content1.png'
import img2 from '../../../public/content2.png'
import img3 from '../../../public/content3.png'

export default function Content(){
    return(
        <>
        <div id='content' className="">
            
            
            <div className=''>
                <Image src={img1} width={500} height={200} alt='man-cooking'/>
            </div>

            <div className='px-5'>
                <Image src={img2} width={300} height={300} alt='man-cooking' className='py-5'/>
                <Image src={img3} width={300} height={200} alt='man-cooking'/>
            </div>

            <aside>

                <h1 className='text-6xl font-bold'>Fasted Food Delivery in City</h1>
                <p className='mt-3'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
           
                <div className='mt-5 grid grid-rows-3'>

                    <div id='clock' className='my-1'>
                        <div><FontAwesomeIcon icon={faClock} className='w-8 h-6 bg-red-500 rounded-full py-0.5'/></div>
                        <p>Best Offer & Prices</p>
                    </div>

                    <div id='percentage' className='my-1'>
                    <div> <FontAwesomeIcon icon={faPercentage} className='w-8 h-7 bg-red-500 rounded-full py-1'/></div>
                        <p>Best Offer & Prices</p>
                    </div>

                    <div id='cart' className='my-3 '>
                        <div><FontAwesomeIcon icon={faCartShopping} className='w-8 h-7 bg-red-500 rounded-full py-1'/></div>
                        <p>Online Services Available</p>
                    </div>

                </div>
            
            </aside>

        </div>
        
        </>
    )
}