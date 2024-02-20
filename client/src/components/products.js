import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import productslice from '../redux/productslice'
import cartslice from '../redux/cartslice'

const Users = () => {
    const [productsName , setProductsName] = useState([])
    const [productSearch , setProductSearch ] = useState([])
    const [products , setProducts] = useState([])
    const [showDivs, setShowDivs] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

// FUNCTIONS
   const fetchProduct = async () => {
    
   try {
        const response = await axios.get(`http://localhost:3000/getproduct/${productsName}`)
             setProductSearch(response.data)
             setShowDivs(true)
    } catch (err) {
        console.error(err)
    }
    }

    if(!productsName){
      window.location.reload();
    }

    function getProduct(){
      axios.get("http://localhost:3000/getproduct")
      .then(res=>{
        setProducts(res.data)
      })
    }
    useEffect(()=>{getProduct()},[])

  return (
    <>
  <div className='container flex justify-center mt-20'>
    <input type='text' id='search' className='rounded-md' value={productsName} onChange={(e)=>setProductsName(e.target.value)}/>
    <button onClick={fetchProduct} className='btn btn-danger mx-10'>Search</button>
  </div> 
  
  { showDivs && (
       
       <div className="card container mt-20" key={productSearch._id} style={{width:"20rem"}}>
       <div className="card-body text-center flex justify-center flex-col " >
           <h5 className="card-title">Name : {productSearch.name}</h5>
           <p className="card-text">Price : {productSearch.price}</p>
           <p className="card-text">Production : {productSearch.production}</p>
           <p className="card-text">Description : {productSearch.description}</p>
           
           <button className='btn btn-primary' 
           onClick={()=>{
               navigate(`${productsName}`)
               dispatch(productslice.actions.viewproduct(productSearch))
           }}>View More</button>

            &nbsp;

            <button className='btn btn-info'
            onClick={()=>{
               dispatch(cartslice.actions.addtocart(productSearch))
               }}>Add to Cart</button>
       </div>
       </div>
  )}



    <div className='grid grid-cols-3 container gap-2 mt-20'>
       
       {
        showDivs == false && 
            products.map(product=>
                <div className="card" key={product._id}>
                <div className="card-body text-center">
                    <h5 className="card-title">Name : {product.name}</h5>
                    <p className="card-text">Price : {product.price}</p>
                    <p className="card-text">Production : {product.production}</p>
                    <p className="card-text">Description : {product.description}</p>
                    
                    <button className='btn btn-primary' 
                    onClick={()=>{
                        navigate(`${product.name}`)
                        dispatch(productslice.actions.viewproduct(product))
                    }}>View More</button>

                     &nbsp;

                     <button className='btn btn-info'
                     onClick={()=>{
                        dispatch(cartslice.actions.addtocart(product))
                        }}>Add to Cart</button>

                  
                </div>
                </div>
            )}    
    </div>

    </>
  )
}

export default Users
