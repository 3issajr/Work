import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Index from './Components/index'
import Team from './Components/team'
import Contactus from './Components/contactus'
import {Routes , Route} from 'react-router-dom'


import React from 'react'

const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/home' element={<Index/>}></Route>
      <Route path='/product' element={Index}></Route>
      <Route path='/service' element={Index}></Route>
      <Route path='/aboutus' element={Index}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
    </Routes>

    <Footer/>
      
    </>
  )
}

export default App
