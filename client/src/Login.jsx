import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login(){

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{name,email,password})
        .then(result=>{
            console.log(result)
            if(result.data === "Sucess"){
                navigate('/home')

            }
        
        })
        .catch(err=>console.log(err))
    }


    return (
        <div className="container mt-5">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}> 
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"  onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        
        <div className="mt-3">
          <p>Don't  have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    )
}


export default Login;