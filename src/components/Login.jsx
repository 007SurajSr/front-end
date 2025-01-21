import React from "react";

const Login = () => {
 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        console.log(email, password);
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