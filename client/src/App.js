import  {Suspense, useState, useEffect} from 'react'
import { Reveal } from 'react-reveal'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Background from './Components/background'
import Index from './Pages/index'
import Team from './Pages/team'
import Contactus from './Pages/contactus'
import Signin from './Pages/signin'
import Signup from './Pages/signup'
import Aboutus from './Pages/aboutus'
import {Routes , Route} from 'react-router-dom'


import React from 'react'
import { ClimbingBoxLoader, ClipLoader, BounceLoader } from 'react-spinners'

const App = () => {
const [loading , setLoading] = useState(false)
const LazyHome = React.lazy(() => import("./Pages/index"));

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
      <Route path='/product' element={Index}></Route>
      <Route path='/service' element={Index}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    <Footer/>
    </Suspense>
  )}
    </div>

    </>
  )
}

export default App
