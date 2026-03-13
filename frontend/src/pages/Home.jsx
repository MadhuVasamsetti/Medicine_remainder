import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Medicine Reminder System</h1>
        <p>
          Never miss your medicines again. Our smart reminder system helps you
          stay healthy by reminding you at the right time.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn-outline">Register</Link>
        </div>
      </section>


      {/* FEATURES */}
      <section className="features">
        <h2>Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>⏰ Smart Reminders</h3>
            <p>
              Get notified exactly when it is time to take your medicine.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 SMS Notifications</h3>
            <p>
              Receive medicine reminders directly to your registered phone
              number.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Medicine Tracking</h3>
            <p>
              View all your medicines, dosages and schedules in one dashboard.
            </p>
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="how">
        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">
            <h3>1️⃣ Register</h3>
            <p>Create an account with your phone number.</p>
          </div>

          <div className="step">
            <h3>2️⃣ Add Medicines</h3>
            <p>Enter medicine name, dosage and time.</p>
          </div>

          <div className="step">
            <h3>3️⃣ Get Reminder</h3>
            <p>You receive notification and alarm at medicine time.</p>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Medicine Reminder System</p>
      </footer>

    </div>
  );
}

export default Home;