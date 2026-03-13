import { useState } from "react";
import "../styles/Login.css";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email,password);
  }

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;