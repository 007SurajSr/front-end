import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const SignUp = () =>{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();



     
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
        navigate('/')
        }
    })

   const collectData = async ()=>{
    console.warn(name, email, password);
    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
    });
    const result = await response.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    if(response){
        navigate('/');
    }
  }
   
    return (
        <div className="register">
            <h1  >Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inputBox" type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password"/>
            <button className="appButton" onClick={collectData} type="button">Sign Up</button>
        </div>
    )
}
 export default SignUp;