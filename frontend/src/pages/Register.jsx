import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Register() {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [phone,setPhone]=useState("")

const navigate = useNavigate()

const handleRegister=(e)=>{

e.preventDefault()

const user={
name,
email,
password,
phone
}

localStorage.setItem("user",JSON.stringify(user))

alert("Registration Successful")

navigate("/login")

}

return(

<div className="auth">

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<input
type="text"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
required
/>

<button type="submit">Register</button>

</form>

</div>

)

}

export default Register