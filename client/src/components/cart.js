import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import cartslice from '../redux/cartslice'

const Cart = () => {

    const dispatch = useDispatch();

    const productData = useSelector((state)=>state?.cart?.items)
    

    const arr = productData.filter((value, index, self)=>
      index === self.findIndex((t)=>(
      t.id !==  value.id ,
      t.name == value.name
    )))

    



  return (
    <>
    <div className='container flex justify-center gap-2 mt-20'>
       
       {

        productData.length === 0 ? <h1>Oops!, Cart is empty!</h1>
        :
        arr.map((product)=>
            <div className="card" key={product._id}>
                <div className="card-body text-center">
                    <h5 className="card-title">Name : {product.name}</h5>
                    <p className="card-text">Price : {product.price} L.E</p>
                    <button className='btn btn-danger'
                     onClick={
                      ()=>{dispatch(cartslice.actions.removefromcart(product._id))
                      }}>Delete</button>
                </div>
                </div>
)      
        }

    </div>
    </>
  )
}

export default Cart
