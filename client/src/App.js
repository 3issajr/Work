import AdminIndex from './admin/AppAdmin';
import UserIndex from './user/AppUser';
import { Route, Routes } from 'react-router-dom';
import {React, useState , useEffect } from 'react';

import {BounceLoader} from 'react-spinners'
import {Zoom } from 'react-reveal'
import Logo from '../src/user/public/images/logo.png'

function App() {
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{setLoading(false)},3000)
  },[])
  
  return (
    <div className='App'>
      {loading ? (
      <div id='loading' className='flex justify-center mt-64' >
        <div className='flex flex-col'>

          <div className='flex  justify-center'>
            <Zoom >
              <img src={Logo} style={{height:"11rem",width:"11rem"}}/>
              <h1 className='text-5xl font-bold italic pt-20'>Bistro Bliss</h1>
            </Zoom>
          </div>
          <div className='lg:pl-44 mt-10'  >
            <Zoom>
              <BounceLoader size={70} color={"#F37A24"} loading={loading}/>
            </Zoom>
          </div>


        </div>
    </div>

      )
      :
  (
    <>
        <Routes>
            <Route path="/Admin/*" element={<AdminIndex/>} />
            <Route path="/*" element={<UserIndex/>} />
        </Routes>

    </>
  )}
</div>

  )
}

export default App
