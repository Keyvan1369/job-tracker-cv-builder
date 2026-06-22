import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing">


      <nav className="navbar">

        <div className="logo">
          JobTrack
        </div>

        <div className="nav-links">

          <Link to="/login">
            Login
          </Link>

          <Link className="btn-register" to="/register">
            Register
          </Link>

        </div>

      </nav>


      <section className="hero">

        <h1>
          Track your job applications
          <br />
          and build professional CVs.
        </h1>

        <p>
          Manage applications, monitor interviews,
          and create beautiful resumes all in one place.
        </p>

        <div className="hero-buttons">

          <Link className="btn-primary" to="/register">
            Get Started
          </Link>

          <Link className="btn-secondary" to="/login">
            Login
          </Link>

        </div>

      </section>


      <section className="features">

        <div className="card">

          <h2>Job Tracking</h2>

          <p>
            Track all your applications,
            interviews and offers.
          </p>

        </div>

        <div className="card">

          <h2> CV Builder</h2>

          <p>
            Create modern resumes and
            export them as PDF.
          </p>

        </div>

        <div className="card">

          <h2>Analytics</h2>

          <p>
            Monitor your progress and
            improve your success rate.
          </p>

        </div>

      </section>


     <section className="cta">

        <h2>
          Ready to organize your career journey?
        </h2>

        <Link className="btn-primary" to="/register">
          Create Free Account
        </Link>

      </section>



      <footer>

        <p>
          JobTrack © 2026
        </p>

      </footer>

    </div>
  );
}