import { useNavigate } from "react-router-dom"
import "../styles/Dashboard.css"

function Dashboard(){

const navigate = useNavigate()

const user = JSON.parse(localStorage.getItem("user"))

const logout=()=>{

localStorage.removeItem("user")

navigate("/login")

}

return(

<div className="dashboard">

<h2>Welcome {user?.name}</h2>

<p>Your Medicine Reminder Dashboard</p>

<button onClick={()=>navigate("/add-medicine")}>
Add Medicine
</button>

<button className="logout" onClick={logout}>
Logout
</button>

</div>

)

}

export default Dashboard