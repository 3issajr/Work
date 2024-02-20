import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [showPassword , setShowPassword] = useState(true)
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/signin",{email,password})

    .then((result)=>{
      if (result.status===200) {
        localStorage.setItem("user",JSON.stringify(result.data.name))
        document.getElementById("message").innerHTML = "Successfully Logged in";
   
      setTimeout(() => {navigate('/'); window.location.reload()},1000); 
      }
    })
    
    .catch((err)=>{
        if (err.response.status===400) {
          if(err.response.data.error){
            document.getElementById("message").innerHTML = `${err.response.data.error}`;
          }
      }
    })
  }

    return (

<div className='mt-32'>


<div id="message" className='container flex justify-center mb-5  text-red-500 font-extrabold text-xl'
style={{borderRadius:"10px",width:"20rem",backgroundColor:"white"}}>
</div>

  <form onSubmit={handleSubmit}>

{/* Email Input */}
  <div class="form-group  container text-center flex justify-center flex-col">
    <input 
    id='email-input'
    class="form-control text-center" 
    required
    name="email"
    type="email" 
    placeholder="Enter email"
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>

    <small id="emailHelp" class="form-text text-muted flex justify-center mt-5">We'll never share your email with anyone else.</small>

  <div class="form-group container text-center flex justify-center flex-col mt-5">

{/* Password Input */}
    <input 
    required
    class="form-control text-center" 
    name="password"
    type={showPassword ? "password" : "text"}
    placeholder="Enter Password"
    value = {password}
    onChange={(e)=>setPassword(e.target.value)}/>

    <div className='flex justify-center'>
      <input
      id='checkbox'
      type="checkbox"
      value={showPassword}
      onChange={() => setShowPassword((prev) => !prev)}
      /><p className='pt-3 px-2 text-red-800 font-bold'>Show Password</p>
    </div>

  </div>


  <div className='form-btn container text-center flex justify-center mt-10'> 
    <button type="submit" class="btn btn-danger">Submit</button> &nbsp;
    <button type="submit" class="btn btn-danger"><Link to='signup' className='create-account'>Create an account</Link></button>
  </div>


  </form>
</div>

  )
}

export default Login


