import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGit, faGithub } from '@fortawesome/free-brands-svg-icons'

import Img1 from '../../../public/footer1.png'
import Img2 from '../../../public/footer2.png'
import Img3 from '../../../public/foote3.png'
import Img4 from '../../../public/footer4.png'
import Logo from '../../../public/footerlogo.png'

export default function Footer(){
    return(
        <>
        <div id='footer' className='grid grid-cols-3'>

                <div id = "leftfooter"  >

                <div id='leftfooter-header'>
                    <Image src={Logo} width={70} height={20} alt='logo'/>
                    <h1 className='text-3xl'>Bistro Bliss</h1>
                </div>
                
                <div id='leftfooter-p'>
                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                </div>

                <div id='leftfooter-icons'>
                    <div className='icon'>
                 <FontAwesomeIcon icon={faTwitter} className='w-6 h-6'/>
                    </div>
                    <div className='icon'>
                 <FontAwesomeIcon icon={faFacebook} className='w-6 h-6'/>
                    </div>
                    <div className='icon'>
                 <FontAwesomeIcon icon={faInstagram} className='w-6 h-6'/>
                    </div>
                    <div className='icon'>
                 <FontAwesomeIcon icon={faGithub} className='w-6 h-6'/>
                    </div>
                </div>

                </div>

                <div id='middlefooter'>
                    <div id='middlefooter-column1'>
                        <div id='middlefooter-column1-list'>
                        <h1 className='text-2xl text-white'>Pages</h1>
                            <Link href='/Home'>Home</Link>
                            <Link href='/Home'>About</Link>
                            <Link href='/Home'>Menu</Link>
                            <Link href='/Home'>Pricing</Link>
                            <Link href='/Home'>Blog</Link>
                            <Link href='/Home'>Contact</Link>
                            <Link href='/Home'>Delivery</Link>
                        </div>
                    </div>

                    <div id='middlefooter-column2'>
                        <div id='middlefooter-column2-list'>
                        <h1 className='text-2xl text-white'>Utility Pages</h1>
                            <Link href='/Home'>Start Here</Link>
                            <Link href='/Home'>Styleguide</Link>
                            <Link href='/Home'>Password Protected</Link>
                            <Link href='/Home'>404 Not Found</Link>
                            <Link href='/Home'>Licenses</Link>
                            <Link href='/Home'>Chanelog</Link>
                            <Link href='/Home'>View More</Link>
                        </div>
                    </div>

                </div>

                <div id='rightfooter'>

                    <div id='rightfooter-header'>
                        <h1 className='text-2xl'>Follow Us On Instagram</h1>
                        
                        <div id='rightfooter-image' className='grid grid-cols-2'>
                            <div className='img'>
                                <Image src={Img1} width={200} height={200} alt='food'/>
                            </div>

                            <div className='img'>
                                <Image src={Img2} width={200} height={200} alt='food'/>
                            </div>

                            <div className='img'>
                                <Image src={Img3} width={200} height={200} alt='food'/>
                            </div >

                            <div className='img'>
                                <Image src={Img4} width={200} height={200} alt='food'/>
                            </div>
                        </div>

                    </div>

                </div>

                <div id='bottomfooter' className='col-span-3'>
                    <h1>Copyright © 2023 Hashtag Developer. All Rights Reserved</h1>
                </div>
        </div>

        </>
    )
}