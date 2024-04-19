import Catering from '../public/images/catering.png'
import Birthday from '../public/images/birthday.png'
import Wedding from '../public/images/wedding.png'
import Event from '../public/images/event.png'

export default function Services() {
  return (
    <div id='services' className='flex flex-col py-8'>

        <h1 id='services-header' className='text-4xl md:text-7xl text-start '>
          We also offer unique services for your events
        </h1>

        <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>

          <div className='service-box'>
            <img src={Catering} width={370} height={300} alt=' '/>
            <div>
              <h2 className='text-xl md:text-3xl font-medium'>Catering</h2>
              <p className='mt-2 text-sm md:text-base'>In the new era of technology we look in the future with certainty for life.</p>
            </div>
          </div>

          <div className='service-box'>
            <img src={Birthday} width={370} height={300} alt='birthday'/>
            <div>
              <h2 className='text-xl md:text-3xl font-medium'>Birthdays</h2>
              <p className='mt-2 text-sm md:text-base'>In the new era of technology we look in the future with certainty for life.</p>
            </div>
          </div>

          <div className='service-box'>
            <img src={Wedding} width={370} height={300} alt='wedding'/>
            <div>
              <h2 className='text-xl md:text-3xl font-medium'>Weddings</h2>
              <p className='mt-2 text-sm md:text-base'>In the new era of technology we look in the future with certainty for life.</p>
            </div>
          </div>

          <div className='service-box'>
            <img src={Event} width={370} height={300} alt='event'/>
            <div>
              <h2 className='text-xl md:text-3xl font-medium'>Events</h2>
              <p className='mt-2 text-sm md:text-base'>In the new era of technology we look in the future with certainty for life.</p>
            </div>
          </div>

        </div>

      </div>
  )
}
