import {Routes , Route , useLocation} from 'react-router-dom'

import Header from './components/header'
import NavBar from './components/navbar'
import Footer from './components/footer'
import NotFound from './components/NotFonud'

import Home from './pages/home'
import Menu from './pages/menu'
import Book from './pages/book'
import About from './pages/about'
import Blogs from './pages/blogs'
import BlogDetails from './pages/blogdetails'
import Contact from './pages/contact'
import Register from './pages/register'
import Login from './pages/login'
import Profile from './pages/profile'

function App() {

  const location = useLocation();
  const pathname = location.pathname;

  return (
   <>
  <Header/>

  <NavBar currentpath={pathname}/>

   <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
          <Route path='/book' element={<Book/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotFound/>} />
    </Routes> 

  <Footer/>
   </>
  );
}

export default App;
