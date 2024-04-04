import Img1 from '../public/images/blog1.png'
import Img2 from '../public/images/blog2.png'
import Img3 from '../public/images/blog3.png'
import Img4 from '../public/images/blog4.png'
import Img5 from '../public/images/blog5.png'

export default function Blogs() {
    return (
        <div id='blogs' className='mx-auto px-4'>

            <div id="blog-header" className='flex py-8'>
                <h1 className='text-2xl md:text-3xl'>Our Blog & Articles</h1>
                <div id='blogbtndiv'>
                    <button id='blogbtn' className='px-4 py-2 text-white bg-red-500 border border-red-500 rounded-full md:px-6 md:py-3'>Read All Articles</button>
                </div>
            </div>

            <div className='flex flex-wrap justify-center'>

                <div id='blogmain' className='w-full md:w-1/2 lg:w-1/5 md:mr-4 mb-4'>
                    <div>
                        <img src={Img1} width={300} height={100} alt='burger' id='blog-img' />
                    </div>
                    <small class='block'>January 3, 2023</small>
                    <p id='blogmain-p1' className='text-sm md:text-base'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                    <p id='blogmain-p2' className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas</p>
                </div>

                <aside id='blogsubmain' className='grid grid-cols-2  md:w-1/2 lg:w-1/4 md:ml-4 gap-5 '>

                    <div id='box1'>
                        <div >
                            <img src={Img2}  width={700} height={500} alt='burger' className='blog-img' />
                        </div>
                        <small className='block'>January 3, 2023</small>
                        <p className='text-sm md:text-base'>How to prepare the perfect french fries in an air fryer</p>
                    </div>

                    <div id='box2'>
                        <div>
                            <img src={Img3}  width={700} height={500} alt='chicken' className='blog-img' />
                        </div>
                        <small className='block'>January 3, 2023</small>
                        <p className='text-md md:text-base'>How to prepare delicious chicken tenders</p>
                    </div>

                    <div id='box3' className='mb-4'>
                        <div>
                            <img src={Img4}  width={700} height={500} alt='dessert' className='blog-img' />
                        </div>
                        <small className='block'>January 3, 2023</small>
                        <p className='text-sm md:text-base'>7 delicious cheesecake recipes you can prepare</p>
                    </div>

                    <div id='box4'>
                        <div>
                            <img src={Img5}  width={700} height={500}alt='pizza' className='blog-img' />
                        </div>
                        <small className='block'>January 3, 2023</small>
                        <p className='text-sm md:text-base'>How to prepare delicious chicken tenders</p>
                    </div>

                </aside>

            </div>
            
        </div>
    )
}
