import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState , useEffect  } from 'react'
import { useDispatch } from 'react-redux'
import cartslice from '../redux/cartslice'
import axios from 'axios'


const Singleproduct = () => {
  const [products , setProducts] = useState([])
  const params = useParams();
  const pid = params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/deleteproduct/${pid}`)
    alert("Product Deleted Succesfully")
    navigate('/shop')
}

function getProduct(){
    axios.get(`http://localhost:3000/getproduct/${pid}`).then(res=>{
        setProducts(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
}

useEffect(()=>{getProduct()},[])

  return (
    <>
    <div className='container flex justify-center gap-2 mt-20'>
       
           
                <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">Name : {products.name}</h5>
                    <p className="card-text">Price : {products.price}</p>
                    <p className="card-text">Production : {products.production}</p>
                    <p className="card-text">Description : {products.description}</p>
                    <p className="card-text>">Image : <img src={products.image} alt={products.name}/></p>
                     &nbsp; <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                     &nbsp; <button className='btn btn-info'
                     onClick={()=>{
                      dispatch(cartslice.actions.addtocart(products))
                     }}>Add to Cart</button>
                </div>
                </div>

    </div>
    </>
  )
}

export default Singleproduct
