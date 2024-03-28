import Image from 'next/image'


import Catering from '../../../public/catering.png'
import Birthday from '../../../public/birthday.png'
import Wedding from '../../../public/wedding.png'
import Event from '../../../public/event.png'
export default function Services(){
return(
    <>
    <div id='services'>
        <div className='container'>

            <h1 id='services-header' className='text-7xl '>We also offer unique services for your events</h1>

            <div className='row grid grid-cols-4'>

          <div id='box2'>
            <Image src={Catering} width={370} height={300} alt='catering'/>
                <div>
                    <h2 className='text-3xl font-extrabold'>Catering</h2>
                </div>

                <div>
                    <p>In the new era of technology we look in the future with certainty for life.</p>
                </div>
          </div>

          <div id='box2'>
            <Image src={Birthday} width={370} height={300} alt='catering' />
                <div>
                    <h2 className='text-3xl font-extrabold'>Birthdays</h2>
                </div>

                <div>
                    <p>In the new era of technology we look in the future with certainty for life.</p>
                </div>
          </div>
          
          <div id='box3'>
            <Image src={Wedding} width={370} height={300} alt='catering'/>
                <div>
                    <h2 className='text-3xl font-extrabold'>Weddings</h2>
                </div>

                <div>
                    <p>In the new era of technology we look in the future with certainty for life.</p>
                </div>
          </div>

          <div id='box4'>
            <Image src={Event} width={370} height={300} alt='catering'/>
                <div>
                    <h2 className='text-3xl font-extrabold'>Events</h2>
                </div>

                <div>
                    <p>In the new era of technology we look in the future with certainty for life.</p>
                </div>
          </div>

          </div>


        </div>

    </div>
    
    </>
)
}