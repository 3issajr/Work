import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import userSlice from '../redux/userslice'
import axios from 'axios'

const Signup = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [firstpass , setFirstPass] = useState("")
  const [secondpass , setSecondPass] = useState("")
  const [showPassword , setShowPassword] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newUser = {name,email,firstpass,secondpass}
    axios.post('http://localhost:3000/signin/adduser',newUser)
    .then((result)=>{
      if(result.status == 201){
        dispatch(userSlice.actions.postuserdata(name))
        localStorage.setItem("user",JSON.stringify(newUser.name))
        document.getElementById("message").innerHTML = "Successfully Registered";

         setTimeout(() => { navigate('/'); window.location.reload();}, 1000); 
      }
    })
    .catch((err)=>{
      if(err.response.status == 400){
          document.getElementById("message").innerHTML = `${err.response.data.error}`;
      }
    })

  }


  return (

  <div className='mt-20'>

    <div id="message" className='container flex justify-center mb-5  text-red-500 font-extrabold text-xl'
    style={{borderRadius:"10px",width:"20rem",backgroundColor:"white"}}></div>

    <form onSubmit={handleSubmit}>

  {/* Name Input */}
  <div class="form-group  container text-center flex justify-center flex-col">
    <input 
    required
    class="form-control text-center" 
    name="name"
    type="text" 
    onChange={(e)=>setName(e.target.value)}
    placeholder="Enter Your Name"/>
  </div>

{/* Email Input */}
  <div class="form-group  container text-center flex justify-center flex-col mt-5">
    <input 
    required
    class="form-control text-center" 
    name="email"
    type="email"
    placeholder="Enter email"
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>

    <small id="emailHelp" class="form-text text-muted flex justify-center mt-4">We'll never share your email with anyone else.</small>

{/* Password Input */}
  <div class="form-group container text-center flex justify-center flex-col mt-5">
    <input 
    required
    class="form-control text-center" 
    name="firstpass"
    placeholder="Enter Password"
    type={showPassword ? "password" : "text"}
    onChange={(e)=>setFirstPass(e.target.value)}/>
  </div>

{/* Second Password Input */}
  <div class="form-group container text-center flex justify-center flex-col mt-5">
    <input 
    required
    class="form-control text-center" 
    name="secondpass"
    placeholder="Re-Enter Password"
    type={showPassword ? "password" : "text"}
    onChange={(e)=>setSecondPass(e.target.value)}/>
  </div>

  <div className='flex justify-center'>
      <input
      id = "checkbox"
      type="checkbox"
      value={showPassword}
      onChange={() => setShowPassword((prev) => !prev)}/>
      <p className='pt-3 px-2 text-red-800 font-bold'>Show Password</p>
  </div>

{/* Button */}
  <div className='form-btn container text-center flex justify-center mt-10'> 
  <button type="submit" class="btn btn-danger">Submit</button> &nbsp;
  </div>

</form>
    </div>
  )
}

export default Signup
