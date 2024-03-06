import React from 'react'
import {useState, useEffect} from 'react'
import {Zoom } from 'react-reveal'
import {Routes , Route} from 'react-router-dom'
import {BounceLoader} from 'react-spinners'

import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Background from './Components/background'
import Index from './Pages/index'
import Shop from './Pages/shop'
import Cart from './Pages/cart'
import Signin from './Pages/account/signin'
import Signup from './Pages/account/signup'
import Forgetpass from './Pages/account/forgetpass'
import Changepass from './Pages/account/changepass'
import Contactus from './Pages/contactus'
import Aboutus from './Pages/aboutus'
import Team from './Pages/team'
import Category from './Pages/category'
import Menaccessories from './Pages/accessories/menaccessories'
import Womenaccessories from './Pages/accessories/womenaccessories'
import Indoor from './Pages/venues/indoor'
import Outdoor from './Pages/venues/outdoor'
import Photographers from './Pages/graphers/photographers'
import Videographers from './Pages/graphers/videographers'
import Logo from '../src/assets/1000139094-removebg-preview.png'


const App = () => {
const [loading , setLoading] = useState(false)

useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])


  return (
    <div className='App'>
      {loading ? (
        <div id='loading' className='col-12 col-md-12 col-xl-12' >
          <div className='d-flex justify-center col-12'>
          <Zoom >
            <img src={Logo} style={{height:"30rem",width:"30rem"}}/>
          </Zoom>
          </div>

          <Zoom>
            <BounceLoader size={100} color={"#F37A24"} loading={loading}/>
          </Zoom>
      </div>
      )
      :
  (
    <>
    <Background/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/home' element={<Index/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/outdoor' element={<Outdoor/>}></Route>
          <Route path='/indoor' element={<Indoor/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/menaccessories' element={<Menaccessories/>}></Route>
          <Route path='/womenaccessories' element={<Womenaccessories/>}></Route>
          <Route path='/photographers' element={<Photographers/>}></Route>
          <Route path='/videographers' element={<Videographers/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/forgetpass' element={<Forgetpass/>}></Route>
          <Route path='/changepass' element={<Changepass/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
        </Routes>
      <Footer/>
      </>
  )}
    </div>

  )
}

export default App
