import heroImage from '../public/images/hero.png';

export default function Hero() {
    return (
        <div id='hero' className='px-4 md:px-10 lg:px-20 py-8 md:py-16 lg:py-24'>

            <div className='flex flex-col md:flex-row justify-center items-center'>

                <div id='heroimg' className='w-full md:w-1/2 lg:w-5/6 relative mb-8 md:mb-0'>
                    <img src={heroImage} className="w-full h-auto" alt='hero' />
                </div>

                <div id='herotext' className='w-full md:w-1/2 md:pl-8 lg:pl-12 mt-8 md:mt-0 text-center'>

                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold mb-4'>Best food for<br/>your taste</h1>
                    <div className='mb-4'>
                        <p className='text-sm md:text-base lg:text-lg'>Discover delectable cuisine and unforgettable moments<br/>in our welcoming, culinary haven.</p>
                    </div>

                    <div id='herobtns' className='flex flex-col md:flex-row justify-center'>
                        <button id='leftbtn' className='py-2 px-4 rounded-full md:mr-4 mb-2 md:mb-0'>Book A Table</button>
                        <button id='rightbtn' className='py-2 px-4 rounded-full'>Explore Menu</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
