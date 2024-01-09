import React, { useEffect, useState } from 'react'
import ShowOrder from './ShowOrder'

const AddOrder = () => {
    const [cred,setCred]=useState({sub_total:0,phoneNumber:""});
    const [data,setData]=useState([]);
    const token=localStorage.getItem("token");
    useEffect(()=>{
        fetch('https://backend-75u8yox1i-syedddanishalinaqvi.vercel.app/api/order/get-order',{
            method:'GET',
            headers:{
                'Content-Type':"application/json",
                'token':token
            },
            body:JSON.stringify()
        }).then(response=>response.json())
        .then(dat=>setData(dat));
    },[token])
    const handleChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch('https://backend-75u8yox1i-syedddanishalinaqvi.vercel.app/api/order/add-order',{
            method:'POST',
            headers:{
                'Content-Type':"application/json",
                'token':localStorage.getItem("token")
            },
            body:JSON.stringify(cred)
        })
        const newdata=await response.json();
        setData([...data,newdata.data]);
    }
  return (
    <div>
    <form class="container my-5">
    <div class="mx-5">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Sub Total</label>
            <input type="number" class="form-control" onChange={(e)=>handleChange(e)} name="sub_total" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Phone Number</label>
            <input type="number" class="form-control" onChange={(e)=>handleChange(e)} name="phoneNumber" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Add Order</button>
    </div>
</form>
<div style={{backgroundColor:"#000",color:"#fff",display:"flex",justifyContent:"center"}} class="container my-3">All Orders</div>
<div>
    {
        data.map((element)=>{
            return(<div key={element.id}><ShowOrder data={element}/></div>)
        })
    }
</div>
</div>
  )
}

export default AddOrder
