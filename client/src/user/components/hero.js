import heroImage from '../public/images/hero.png';


export default function Hero() {
  
    return (
        <div id='hero' className='py-14 '>

            <div >
                    <img src={heroImage} alt='hero' className='xxs:hidden' />

                <div id='herotext' className='mt-8 text-center xs:pt-10'>

                    <h1 className=' text-5xl font-bold mb-4 break-normal'>Best food for your taste</h1>
                    <div className='mb-4 '>
                        <p className='text-sm md:text-base lg:text-lg '>Discover delectable cuisine and unforgettable moments<br/>in our welcoming, culinary haven.</p>
                    </div>

                    <div id='herobtns' className='flex flex-row justify-center'>
                        <button id='leftbtn' className='py-2 px-4 rounded-full mr-4  mb-0'>Book A Table</button>
                        <button id='rightbtn' className='py-2 px-4 rounded-full'>Explore Menu</button>
                    </div>
                    <div>
                        
                    </div>
                    

                </div>

            </div>

        </div>
    )
}
