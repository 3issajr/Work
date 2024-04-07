import {Routes,Route} from 'react-router-dom'

import AdminHome from './components/AdminHome'
import AdminDashBoard from './components/AdminDashboard'
import AdminMenu from './components/AdminMenu'
function App(){
return(
    <>
    <Routes>
        <Route path='/' element={<AdminHome/>}></Route>
        <Route path='/dashboard' element={<AdminDashBoard/>}></Route>
        <Route path='/menu' element={<AdminMenu/>}></Route>
    </Routes>
    </>
)
}

export default App