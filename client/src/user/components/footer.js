import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

import Img1 from '../public/images/footer1.png'
import Img2 from '../public/images/footer2.png'
import Img3 from '../public/images/foote3.png'
import Img4 from '../public/images/footer4.png'
import Logo from '../public/images/footerlogo.png'

export default function Footer() {
  return (
    <div id='footer' className='grid grid-cols-3  py-8 bg-gray-800 text-white mt-auto z-auto'>

      <div id='leftfooter' className='flex flex-col  md:items-start'>

        <div id='leftfooter-header' className='flex items-center'>
          <img src={Logo} width={80} height={20} alt='logo' />
          <h1 className='text-3xl ml-2'>Bistro Bliss</h1>
        </div>

        <div id='leftfooter-p' className='mt-4'>
          <p>In the new era of technology we look in the future with certainty and pride to for our company and.</p>
        </div>

        <div id='leftfooter-icons' className=' gap-2 mt-4'>
          <div className='icon mr-2'>
            <FontAwesomeIcon icon={faTwitter} className='w-6 h-6' />
          </div>
          <div className='icon mr-2'>
            <FontAwesomeIcon icon={faFacebook} className='w-6 h-6' />
          </div>
          <div className='icon mr-2'>
            <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
          </div>
        </div>

      </div>

      <div id='middlefooter' className='md:flex-row'>

        <div id='middlefooter-column1' className='mr-8'>
          <h1 className='text-2xl '>Pages</h1>
          <div id='middlefooter-column1-list'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/menu'>Pricing</NavLink>
            <NavLink to='/blogs'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/Home'>Delivery</NavLink>
          </div>
        </div>

        <div id='middlefooter-column2'>
          <h1 className='text-2xl '>Utility Pages</h1>
          <div id='middlefooter-column2-list'>
            <NavLink to='/Home'>Start Here</NavLink>
            <NavLink to='/Home'>Styleguide</NavLink>
            <NavLink to='/Home'>Password Protected</NavLink>
            <NavLink to='/Home'>404 Not Found</NavLink>
            <NavLink to='/Home'>Licenses</NavLink>
            <NavLink to='/Home'>Changelog</NavLink>
            <NavLink to='/Home'>View More</NavLink>
          </div>
        </div>

      </div>

      <div id='rightfooter' className='mt-8'>

        <div id='rightfooter-header' className='mb-4'>
          <h1 className='text-2xl'>Follow Us On Instagram</h1>
        </div>
        
        <div id='rightfooter-image' className='grid grid-cols-2 gap-4'>
          <div>
            <img src={Img1} width={200} height={200} alt='food'  className='img' />
          </div>
          <div>
            <img src={Img2} width={200} height={200} alt='food'  className='img' />
          </div>
          <div>
            <img src={Img3} width={200} height={200} alt='food'   className='img'/>
          </div>
          <div>
            <img src={Img4} width={200} height={200} alt='food'   className='img'/>
          </div>
        </div>
      </div>

      <div id='bottomfooter' className='col-span-3 text-center'>
        <p className='text-sm'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>

    </div>
  )
}
