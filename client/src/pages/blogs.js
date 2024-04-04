import { Fade } from 'react-awesome-reveal'
import { Link, NavLink } from 'react-router-dom'
import Data from './blogsdata'

export default function Pages(){

    return(
        <>
        <div id='pagespage' className='pt-8'>

        <Fade direction='down' duration={2000} >
            <div id='blog-header' className='text-center'>
                    <h1 className="text-7xl">Our Blog & Articles</h1>
                    <p className="text-center py-2">We consider all the drivers of change gives you the components you need<br/>to change to create a truly happens.</p>
            </div>
        </Fade>

            <div id='blog-content'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {Data.map((singleblog)=>{
                return(
                    <>
                    <div id='blogitem' key={singleblog.id} className='bg-white rounded-md border-solid border-2'>
                    <Link to={`${singleblog.id}`}> <img src={singleblog.src}  alt={singleblog.name} className='blogimg w-full'/> </Link>
                        <div id='bloginfo' className='p-4'>
                         <small>{singleblog.date}</small>
                         <p>{singleblog.info}</p>
                        </div>
                    </div>
                    </>
                )
              })}
                </div>
            </div>

        </div>
        </>
    )
}
