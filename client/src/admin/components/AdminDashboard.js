import { useState , useEffect } from "react";
import {Link,useLocation , useNavigate} from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown,Space} from 'antd';
import AdminMenu from "./AdminMenu";



export default function AdminDashBoard(){
    const [users, setUsers] = useState([]); // State to hold logged in user
    const loggedInUser = localStorage.getItem('user');
     const items = [
    {
      key: '1',
      label: <Link to='/profile'>My Account</Link>,
    },
    {
      key: '2',
      label: (
        <a>
          Logout
        </a>
        
      ),
    },
  ];
  function username() {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsers(user);
    }
  }

  const handleMenu = async (e)=>{
    
  }
    useEffect(() => { username();}, [location]);

  
    return(
        <>
        <div id ='dashboard flex ' className="h-screen bg-slate-200">
            <div id='dashboard-header' className="flex justify-center items-center">
                <h1 className="text-7xl text-red-800 italic" >Dashboard</h1>
            </div>
            <Dropdown menu={{ items }}>
            <Link onClick={(e) => e.preventDefault()}>
                <Space className='text-2xl bg-slate-200 rounded-lg shadow-md capitalize p-2'>
                {users}
                <DownOutlined />
                </Space>
            </Link>
            </Dropdown>

            <div className="flex justify-center gap-10 mt-20">
                <button to ='/Admin/menu' className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Menu</button>
                <button className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Users</button>
                <button className="bg-red-800 text-white p-10 rounded-lg shadow-md text-4xl">Booking</button>
            </div>

            <AdminMenu/>
        </div>
        </>
    )
}