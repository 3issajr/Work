import { Fade } from 'react-awesome-reveal'
import Location from '../public/images/gps.png'
import { useState } from 'react'

export default function Book(){
    const [book , setBook] = useState({
        date : '',
        time : '',
        name : '',
        phone: '',
        person: '',
    })
    return(
        <>
        <div id="bookpage" className='pt-2'>

        <Fade direction='down' duration={2000} >
            <div id='book-header'>
                <h1 className="text-5xl">Book A Table</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
        </Fade>
    

            <div id='location' className='w-full z-1'>
                <img src={Location}  alt='location' className="locationimg w-full"/>
            </div>

            <div id='book-form' className='mt-2 p-5 w-1/3 absolute rounded-lg shadow-md'>

                <form className='flex justify-center flex-col'>
                    <table className='w-auto'>
                        <tr>
                            <td className="text-2xl">Date</td>
                            <td className="text-2xl">Time</td>
                        </tr>
                        
                        <td>
                            <input 
                            onChange={(e)=>setBook({...book, date:e.target.value})}
                            required
                            type='date'/>
                        </td>
                        
                        <td>
                            <select onChange={(e)=>setBook({...book, time:e.target.value})}>
                                <option value='' hidden></option>
                                <option value='6:30'>6:30</option>
                                <option value='7:30'>7:30</option>
                                <option value='8:30'>8:30</option>
                            </select>
                        </td>
                        <tr>
                            <td className="text-2xl">Name</td>
                            <td className="text-2xl">Phone</td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                onChange={(e)=>setBook({...book, name:e.target.value})}
                                required
                                type='text' 
                                placeholder="Please Enter Your Name"/>
                            </td>
                            <td>
                                <input 
                                onChange={(e)=>setBook({...book, phone:e.target.value})}
                                required
                                type='number' 
                                placeholder="x-xxx-xxx-xxx"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-2xl'>Total Persons</td>
                        </tr>
                        <tr>
                            <td colSpan={5} >
                                <select onChange={(e)=>setBook({...book, person:e.target.value})}>
                                    <option value={''} hidden> </option>
                                    <option value={1}> 1 Person</option>
                                    <option value={2}> 2 Person</option>
                                    <option value={3}> 3 Person</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                        <div id='book-button' className='p-5'>
                            <button className='w-full text-white p-2 rounded-full'>Book A Table</button>
                        </div>

                </form>
            </div>
                  
        </div>
        </>
    )
}