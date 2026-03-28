import { useState } from "react";
import "../styles/AddMedicine.css";

function AddMedicine(){

  const [name,setName] = useState("")
  const [dosage,setDosage] = useState("")
  const [time,setTime] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()

    const medicine={
      name,
      dosage,
      time
    }

    console.log(medicine)
  }

  return(

    <div className="add-container">

      <form className="add-form" onSubmit={handleSubmit}>

        <h2>Add Medicine</h2>

        <input
        type="text"
        placeholder="Medicine Name"
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        type="text"
        placeholder="Dosage"
        onChange={(e)=>setDosage(e.target.value)}
        />

        <input
        type="time"
        onChange={(e)=>setTime(e.target.value)}
        />

        <button type="submit">Add Medicine</button>

      </form>

    </div>
  )
}

export default AddMedicine
