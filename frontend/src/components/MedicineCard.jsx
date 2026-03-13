import "../styles/MedicineCard.css";

function MedicineCard({ medicine }) {

  return (
    <div className="medicine-card">

      <h3>{medicine.name}</h3>

      <p><strong>Dosage:</strong> {medicine.dosage}</p>

      <p><strong>Time:</strong> {medicine.time}</p>

    </div>
  );
}

export default MedicineCard;