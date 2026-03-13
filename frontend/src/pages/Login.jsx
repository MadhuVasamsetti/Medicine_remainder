import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Auth.css"

function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const navigate = useNavigate()

const handleLogin=(e)=>{

e.preventDefault()

const savedUser = JSON.parse(localStorage.getItem("user"))

if(savedUser && savedUser.email===email && savedUser.password===password){

alert("Login Successful")

navigate("/dashboard")

}else{

alert("Invalid Credentials")

}

}

return(

<div className="auth">

<h2>Login</h2>

<form onSubmit={handleLogin}>

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

<button type="submit">Login</button>

</form>

</div>

)

}

export default Login