import Logo from '../../../public/logo.png'
import Image from 'next/image'; // Import Image component from Next.js
import Link from 'next/link';

export default function HeaderMain(){
    interface staticImage {
        image : staticImage
    }
    return (
        <>
        <nav>
            <div id="secondheader" className='container '>

                <div id='navbar-logo'>
                    <Image 
                        src={Logo}
                        alt="Logo"
                        width={70}
                        height={100}
                        />
                </div>


                    <div id='navbar-list'>
                        <div> <Link href='#'>Home</Link>  </div>
                        <div> <Link href='#'>About</Link> </div>
                        <div> <Link href='#'>Menu</Link>  </div>
                        <div> <Link href='#'>Pages</Link> </div>
                        <div> <Link href='#'>Constact</Link></div>
                   </div>

                    <div>
                        <button id='navbar-btn'>Book a Table</button>
                    </div>

                </div>


        </nav>
        
        </>
    )
}