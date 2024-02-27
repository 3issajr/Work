import  {Suspense, useState, useEffect} from 'react'
import { Reveal } from 'react-reveal'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Background from './Components/background'
import Index from './Pages/index'
import Shop from './Pages/shop'
import Cart from './Pages/cart'
import Signin from './Pages/signin'
import Signup from './Pages/signup'
import Contactus from './Pages/contactus'
import Aboutus from './Pages/aboutus'
import Team from './Pages/team'
import Menaccessories from './Pages/accessories/menaccessories'
import Womenaccessories from './Pages/accessories/womenaccessories'
import Indoor from './Pages/venues/indoor'
import Outdoor from './Pages/venues/outdoor'
import {Routes , Route} from 'react-router-dom'


import React from 'react'
import {BounceLoader } from 'react-spinners'

const App = () => {
const [loading , setLoading] = useState(false)
// const LazyHome = React.lazy(() => <import("./Pages/index")>);

useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])


  return (
    <>
    <div className='App'>
      {loading ? (
        <div id='loading' className='col-12 col-md-12 col-xl-12' >
          <Reveal right>
            <h1 style={{fontSize:"6rem"}}>𝓜𝔂𝓓𝓪𝔂</h1>
          </Reveal>

          <Reveal left>
            <BounceLoader size={100} color={"#F37A24"} loading={loading}/>
          </Reveal>
      </div>
      )
      :
  (
    <Suspense>
    <Background/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/home' element={<Index/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/outdoor' element={<Outdoor/>}></Route>
        <Route path='/indoor' element={<Indoor/>}></Route>
        <Route path='/menaccessories' element={<Menaccessories/>}></Route>
        <Route path='/womenaccessories' element={<Womenaccessories/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
      </Routes>
    <Footer/>
    </Suspense>
  )}
    </div>

    </>
  )
}

export default App
