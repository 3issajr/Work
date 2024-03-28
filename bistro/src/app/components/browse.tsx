import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import Tea from '../../../public/tea 1.png'
import Dish from '../../../public/dish.png'
import Drinks from '../../../public/drinks.png'
import Dessert from '../../../public/dessert.png'

export default function Browse(){
    return(
        <>
        <div id='browse' className="flex-col ">

                <div>
                    <h1 id='browse-header' className=" text-7xl justify-center"> Browse Our Menu</h1>
                </div>
            

                <div className="container  grid grid-cols-4">

                    <div id='box1'>
                        <div className='bg-slate-300 rounded-full py-5 px-5'>
                            <Image src={Tea} width={50} height={50} alt="tea" /> 
                        </div>
                        <div id='box1-title'>
                                <h1 className="font-extrabold">Breakfast</h1>
                                <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                                <button>Explore Menu</button>
                        </div>
                    </div>

                    <div id='box2' >
                        <div className='bg-slate-300 rounded-full py-5 px-5'>
                            <Image src={Dish} width={50} height={50} alt="tea" /> 
                        </div> 
                            <div id='box2-title'>
                                <h1 className="font-extrabold">Main Dishes</h1>
                                <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                                <button>Explore Menu</button>
                        </div>
                    </div>

                    <div id='box3'>
                        <div className='bg-slate-300 rounded-full py-5 px-5'>
                            <Image src={Drinks} width={60} height={50} alt="tea" /> 
                        </div>                        
                            <div id='box3-title'>
                                <h1 className="font-extrabold">Drinks</h1>
                                <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                                <button>Explore Menu</button>
                        </div>
                    </div>

                    <div id='box4'>
                        <div className='bg-slate-300 rounded-full py-5 px-5'>
                            <Image src={Dessert} width={60} height={50} alt="tea" /> 
                        </div>
                        <div id='box4-title'>
                                <h1 className="font-extrabold">Dessert</h1>
                                <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                                <button>Explore Menu</button>
                        </div>
                    </div>

                </div>

                </div>

        </>
    )
}