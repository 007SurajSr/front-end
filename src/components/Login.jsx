import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    // eslint-disable-next-line 
    useEffect(()=>{
        
     const auth = localStorage.getItem('user');
     if(auth){
        navigate("/");
     }
    }, [navigate])
    const handleLogin = async () => {
        console.warn("email, password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
           localStorage.setItem("user", JSON.stringify(result));
           navigate("/");
        }else{
            alert( "Please enter details to get connect");

            }
        }
    


    return(
        <div className="login">
            <h1>Login with credentials</h1>
            <input type="email" className=" inputBox2" placeholder=" Enter Email"
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="text" className=" inputBox2" placeholder=" Enter Password"
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} className="appButton2" type="button">Login</button>
        </div>
    )

}
export default Login;