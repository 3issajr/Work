import axios from 'axios'
import {Link} from 'react-router-dom'

export default function AdminDashBoard(){
 
    const levelAuthentication = async (e)=>{
      axios.get('http://localhost:3000/')
    }
    return(
        <>
        <div id ='dashboard' className=" ">
            <div id='dashboard-header' className="flex justify-center items-center">
                <h1 className="text-7xl text-red-800 italic" >Dashboard</h1>
            </div>

            <div id='navitems' className="flex justify-center gap-10 mt-20">
                <Link to ='/Admin/menu' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Menu</Link>
                <Link to='/Admin/user' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Users</Link>
                <Link to='/Admin/book' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Booking</Link>
                <Link to='/Admin/register' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Add New Admin</Link>
            </div>

        </div>
        </>
    )
}