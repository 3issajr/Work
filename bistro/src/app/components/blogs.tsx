import Image from 'next/image'

import Img1 from '../../../public/blog1.png'
import Img2 from '../../../public/blog2.png'
import Img3 from '../../../public/blog3.png'
import Img4 from '../../../public/blog4.png'
import Img5 from '../../../public/blog5.png'

export default function Blogs(){
    return(
        <>
        <div id='blogs' className="">
            
                <div id="blog-header">
                    <h1>Our Blog & Articles</h1>
                    <div id='blogbtndiv'>
                        <button id='blogbtn'>Read All Articles</button>
                    </div>
                </div>


<div id='test' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>


                    <div id='blogmain'>
                        <div>
                            <Image src={Img1} width={300} height={100} alt='burger' id='blog-img'/>
                        </div>
                        <small>January 3, 2023</small>
                        <p id='blogmain-p1'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                        <p id='blogmain-p2'>
                        Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut 
                        facilisis neque egestas
                        </p>
                        
                    </div>

                <aside id='blogsubmain' className='grid grid-cols-2 w-2/12  '>

                    <div id='box1'>
                        <div>
                            <Image src={Img2} width={200} height={200} alt='burger' className='blog-img'/>
                        </div>
                        <small>January 3, 2023</small>
                        <p>How to prepare delicious chicken tenders</p>
                    </div>

                    <div id='box2'>
                        <div>
                            <Image src={Img3} width={200} height={200} alt='burger' className='blog-img'/>
                        </div>
                        <small>January 3, 2023</small>
                        <p>7 delicious cheesecake recipes you can prepare</p>
                    </div>

                    <div id='box3'>
                        <div>
                            <Image src={Img4} width={200} height={200} alt='burger' className='blog-img'/>
                        </div>
                        <small>January 3, 2023</small>
                        <p>5 great pizza restaurants you should visit this city</p>
                    </div>

                    <div id='box4'>
                        <div>
                            <Image src={Img5} width={200} height={200} alt='burger' className='blog-img'/>
                        </div>
                        <small>January 3, 2023</small>
                        <p>The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                    </div>
                    
                </aside>

</div>




            </div>
        
        </>
    )
}