import Image from 'next/image'

import Img1 from '../../../public/testimonals1.png'
import Img2 from '../../../public/testimonals2.png'
import Img3 from '../../../public/testimonals3.png'

export default function Testimonals(){
    return(
        <>
        <div id='testimonals' className="flex-col ">

                <div>
                    <h1 id='testimonals-header' className=" text-7xl justify-center"> What Our Customers Say</h1>
                </div>
            

                <div className="container  grid grid-cols-3">

                    <div id='box1'>
                        <div id='box1-title'>

                            <h1 className="font-extrabold">"The Best Restaurant"</h1>
                            <p>Last night, we dined at place and were simply blown away. From the moment we stepped in,
                                we were enveloped in an inviting atmosphere and greeted with warm smiles.
                            </p>

                            <hr/>

                            <div id='avatar1'>
                                <Image src={Img1} width={60} height={50} alt="avatar1" /> 
                                <div>
                                    <p>Sophire Robson</p>
                                    <p>Los Angeles ,CA</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div id='box2' >
                        <div id='box2-title'>

                            <h1 className="font-extrabold">“Simply delicious”</h1>
                            <p> Place exceeded my expectations on all fronts. T
                                he ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner.
                                Each dish was prepared and beautifully presented.
                            </p>

                            <hr/>
                            
                            <div id='avatar2'>
                                <Image src={Img2} width={60} height={50} alt="avatar2" /> 
                                <div>
                                    <p>Matt Cannon</p>
                                    <p>San Diego, CA</p>
                                </div>
                            </div> 

                        </div>
                </div>

                    <div id='box3'>            
                        <div id='box3-title'>

                            <h1 className="font-extrabold">“One of a kind restaurant”</h1>
                            <p>The culinary experience at place is first to none. 
                               The atmosphere is vibrant, the food - nothing short of extraordinary. 
                               The food was the highlight of our evening. Highly recommended.
                            </p>

                            <hr/>

                            <div id='avatar3'>
                                <Image src={Img3} width={60} height={50} alt="avatar3" /> 
                                <div>
                                    <p>Andy Smith</p>
                                    <p>San Francisco, CA</p>
                                </div>
                            </div>

                        </div>
                    </div> 

                </div>

            </div>

        </>
    )
}