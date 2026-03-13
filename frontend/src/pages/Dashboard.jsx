import MedicineCard from "../components/MedicineCard";
import "../styles/Dashboard.css";

function Dashboard(){

  const medicines = [
    {id:1,name:"Paracetamol",dosage:"1 Tablet",time:"8:00 AM"},
    {id:2,name:"Vitamin D",dosage:"1 Capsule",time:"9:00 PM"}
  ]

  return(

    <div className="dashboard">

      <h2>Your Medicines</h2>

      <div className="medicine-list">

        {medicines.map((med)=>(
          <MedicineCard key={med.id} medicine={med}/>
        ))}

      </div>

    </div>
  )
}

export default Dashboard