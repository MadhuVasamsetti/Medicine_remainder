import "../styles/home.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-text">

          <h1>Medicine Reminder</h1>

          <p>
            Never forget your medicines again. Our smart reminder system
            helps patients take medicines on time and stay healthy.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-secondary">Login</Link>
          </div>

        </div>

        <div className="hero-image">
          <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" />
        </div>

      </section>


      {/* PROBLEM SECTION */}

      <section className="problem">

        <h2>Why This App?</h2>

        <div className="problem-grid">

          <div className="problem-card">
            <h3>Elderly Forget Medicines</h3>
            <p>Many patients forget to take their medicines regularly.</p>
          </div>

          <div className="problem-card">
            <h3>Busy Lifestyle</h3>
            <p>People with busy schedules often miss important doses.</p>
          </div>

          <div className="problem-card">
            <h3>Health Risks</h3>
            <p>Missing medicines can lead to serious health problems.</p>
          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features">

        <h2>Powerful Features</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>⏰ Smart Reminders</h3>
            <p>Receive alerts exactly when it is time to take your medicine.</p>
          </div>

          <div className="feature-card">
            <h3>📱 SMS Notifications</h3>
            <p>Get medicine reminders directly to your mobile phone.</p>
          </div>

          <div className="feature-card">
            <h3>💊 Medicine Tracking</h3>
            <p>Manage all your medicines and schedules in one dashboard.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Health Monitoring</h3>
            <p>Track your medicine history and stay consistent.</p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="how">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">
            <h3>1 Register</h3>
            <p>Create your account with your mobile number.</p>
          </div>

          <div className="step">
            <h3>2 Add Medicines</h3>
            <p>Enter medicine name, dosage and timing.</p>
          </div>

          <div className="step">
            <h3>3 Get Reminder</h3>
            <p>Receive notifications and alarms on time.</p>
          </div>

          <div className="step">
            <h3>4 Stay Healthy</h3>
            <p>Never miss your medicines again.</p>
          </div>

        </div>

      </section>


      {/* BENEFITS */}

      <section className="benefits">

        <h2>Benefits of Our System</h2>

        <ul>
          <li>✔ Prevent missing important medicines</li>
          <li>✔ Improve health management</li>
          <li>✔ Help elderly patients</li>
          <li>✔ Reduce health risks</li>
          <li>✔ Simple and easy to use</li>
        </ul>

      </section>


      {/* TESTIMONIAL */}

      <section className="testimonials">

        <h2>User Experiences</h2>

        <div className="testimonial-container">

          <div className="testimonial">
            <p>
              "This system helped my parents take medicines on time.
              Very useful and easy to use."
            </p>
            <h4>— Rahul</h4>
          </div>

          <div className="testimonial">
            <p>
              "I never miss my medicines now. The reminder notifications
              are very helpful."
            </p>
            <h4>— Sneha</h4>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <h2>Start Managing Your Medicines Today</h2>

        <Link to="/register" className="btn-primary">
          Create Your Account
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <p>© 2026 Medicine Reminder System</p>

      </footer>

    </div>
  )
}

export default Home
