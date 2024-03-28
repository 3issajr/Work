import AboutComponent from '../components/about'
import Image from 'next/image'

import BG from '../../../public/aboutbg.png'
export default function About(){
    return(
        <>
        <AboutComponent/>


        <div className='container'>
            <div className='row'>
                <Image src={BG} width={200} height={200} alt='about'/>
            </div>
        </div>
        </>
    )
}