import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Layout.css";

export default function Layout({ children }) {
  const { logout } = useAuth();

  return (
    <div className="layout-container">
      
      <div className="navbar">
        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="content-container">
        {children}
      </div>
    </div>
  );
}