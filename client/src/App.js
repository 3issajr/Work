import Home from './components/home'
import Header from './components/header'
import Createproduct from './components/createproduct'
import Products from './components/products'
import Singleproduct from './components/singleproduct'
import Cart from './components/cart'
import Login from './components/login'
import Signup from './components/signup'
import { Routes , Route } from 'react-router';

function App() {
  
  return (
    <>
    
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/addproduct' element={<Createproduct/>}></Route>
      <Route path='/shop' element={<Products/>}></Route>
      <Route path='/shop/:id' element={<Singleproduct/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/signin' element={<Login/>}></Route>
      <Route path='/signin/signup' element={<Signup/>}></Route>
    </Routes>

    </>
  );
}

export default App;
