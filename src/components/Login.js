import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const history=useNavigate() 
    const [cred,setCred]=useState({phoneNumber:"",password:""});

    const handleChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(cred)
        const response=await fetch('https://backend-three-navy.vercel.app/api/user/login-user',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(cred)
        })
        const json=await response.json();
        if(json){
            localStorage.setItem('token',json.token);
            history("/add");
        }
        else{
            alert("incorrect value")
        }
    }
    return (
        <form class="container my-5">
            <div class="mx-5">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" onChange={(e)=>handleChange(e)} name="phoneNumber" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={(e)=>handleChange(e)} name="password" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Login</button>
                <Link to="/signup"><button type="submit" class="btn btn-primary mx-5">Signup</button></Link>
            </div>
        </form>
    )
}

export default Login
