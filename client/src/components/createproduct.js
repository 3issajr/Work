import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Createproduct = () => {
  const navigate = useNavigate();
  const [name , setName] =useState("")
  const [price , setPrice] =useState(0)
  const [production , setProduction] = useState(0)
  const [description , setDescription] = useState("")
  const [image , setImage] =useState('')
  

  const handleSubmit = async (e)=>{
     e.preventDefault();
     const newProduct = {name,price,production,description}
     const response = await fetch('http://localhost:3000/addproduct',{
      method : 'POST',
      headers : {'Content-Type':'application/json'},
      body: JSON.stringify(newProduct)
     });
     alert("Product Created Succesfully")
     navigate('/shop')
     
     
  }
  return (
    <>
    <form onSubmit={handleSubmit} >
    <div className='container flex justify-center text-center flex-col  mx-auto gap-5 mt-20'>
    
    
      <div>
        <label>Name</label>
        <input
         className="border rounded form-control form-control-lg" 
         type='text' 
         name='name'
         required
         onChange={(e)=>setName(e.target.value)}
         value={name}></input>
      </div>

      <div>
        <label >Price</label>
        <input 
        required
        className="border rounded form-control form-control-lg" 
        name='price'
        type='number' 
        value={price}
        onChange={(e)=>setPrice(e.target.value)}></input>
      </div>

      <div>
        <label>Production</label>
        <input 
        required
        className="border rounded form-control form-control-lg"  
        name='production'
        type='number' 
        value={production}
        onChange={(e)=>setProduction(e.target.value)}></input>
      </div>

      <div>
        <label>Description</label>
        <input 
        required
        className="border rounded form-control form-control-lg"  
        name='description'
        type='text' 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}></input>
      </div>

      <div>
        <label>Image</label>
        <input 
        required
        className="border rounded form-control form-control-lg"  
        name='image'
        type='file' 
        value={image}
        onChange={(e)=>setImage(e.target.value)}></input>
      </div>

        <div>
          <button  className='btn btn-danger mt-8'>Submit</button>
        </div>

    </div>
    </form>
    </>
  )
}

export default Createproduct
