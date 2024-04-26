import {Routes,Route} from 'react-router-dom'

import AdminHome from './components/AdminHome'
import AdminDashBoard from './components/AdminDashboard'
import AdminMenu from './components/Admin_Menu'
import AdminUser from './components/Admin_User'
import AdminRegister from './components/AdminRegister'
import AdminBooking from './components/Admin_Booking'
import Admin_Message from './components/Admin_Message'
function App(){
return(
    <>
    <Routes>
        <Route path='/' element={<AdminHome/>}></Route>
        <Route path='/dashboard' element={<AdminDashBoard/>}></Route>
        <Route path='/menu' element={<AdminMenu/>}></Route>
        <Route path='/user' element={<AdminUser/>}></Route>
        <Route path='/register' element={<AdminRegister/>}></Route>
        <Route path='/book' element={<AdminBooking/>}></Route>
        <Route path='/message' element={<Admin_Message/>}></Route>
    </Routes>
    </>
)
}

export default App