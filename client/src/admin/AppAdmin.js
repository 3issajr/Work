import {Routes,Route} from 'react-router-dom'

import AdminHome from './components/AdminHome'
import AdminDashBoard from './components/AdminDashboard'
import AdminMenu from './components/Admin_Menu'
import AdminUser from './components/Admin_User'
import AdminRegister from './components/AdminRegister'
function App(){
return(
    <>
    <Routes>
        <Route path='/' element={<AdminHome/>}></Route>
        <Route path='/dashboard' element={<AdminDashBoard/>}></Route>
        <Route path='/menu' element={<AdminMenu/>}></Route>
        <Route path='/user' element={<AdminUser/>}></Route>
        <Route path='/register' element={<AdminRegister/>}></Route>
    </Routes>
    </>
)
}

export default App