import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const history=useNavigate() 
    const [cred,setCred]=useState({name:"",phoneNumber:"",password:""});

    const handleChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      await fetch('https://backend-75u8yox1i-syedddanishalinaqvi.vercel.app/api/user/add-user', {
          method: 'POST',
          headers: {
              'Content-Type': "application/json"
          },
          body: JSON.stringify(cred)
      })
      history("/");
      alert("Signed up successfully");
    }
  return (
    <form class="container my-5">
    <div class="mx-5">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" onChange={(e)=>handleChange(e)} name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phone Number</label>
            <input type="number" class="form-control" onChange={(e)=>handleChange(e)} name="phoneNumber" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" onChange={(e)=>handleChange(e)} name="password" id="exampleInputPassword1" />
        </div>
        <Link to="/"><button type="submit" class="btn btn-primary">Login</button></Link>
        <button type="submit" class="btn btn-primary mx-5" onClick={(e)=>handleSubmit(e)}>Signup</button>
    </div>
</form>
  )
}

export default Signup
