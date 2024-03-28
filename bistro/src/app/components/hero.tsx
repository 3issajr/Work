import image from '../../../public/hero.png'
import Image from 'next/image'

export default function Hero(){

    return(
        <>
        <div id='hero'>

            <div className='row'>

                <div id='heroimg'>
                    <Image src={image} width={1100} height={1000} alt='hero'/> 
                </div>

                <div id='herotext'>

                    <h1>Best food for <br/>your taste</h1>

                    <div className='mt-4'>
                        <p>Discover delectable cuisine and unforgettable moments  <br/> in our welcoming, culinary haven.</p>
                    </div>

                    <div id='herobtns'>
                       <button id='leftbtn'>Book A Table</button>
                       <button id='rightbtn'>Explore Menu</button>
                    </div>
                    
                </div>

            </div>

        </div>
        
        </>
    )
}