import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const NotFound = () => {
  return ( 
    <div id='notfound' className="flex justify-center items-center h-screen">
            <Bounce>
                <div className='bg-slate-200 text-red-800 rounded-lg shadow-md font-bold text-center p-5'>
                  <h1 className='text-5xl mb-10'>OOPS! , Page Not Found.</h1>
                  <h1 className='text-5xl py-5'>Subscribe to our Newsletter</h1> 
                  <input className='rounded-lg w-96 p-2 ' type='text'name='subscribe'/>
                  <button className='bg-red-800 text-white rounded-lg p-3 m-5'>Subscribe</button>
                </div>
          </Bounce>
    </div>
  );
};

export default NotFound;
