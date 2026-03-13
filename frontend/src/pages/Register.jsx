import { useState } from "react";
import "../styles/Register.css";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name,email,password);
  }

  return(
    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2>Register</h2>

        <input
        type="text"
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
        />

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

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default Register