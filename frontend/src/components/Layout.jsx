import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { logout } = useAuth();

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#111",
        color: "white"
      }}>
        <div>
          <Link to="/dashboard" style={{ color: "white", marginRight: 10 }}>
            Dashboard
          </Link>

          <Link to="/jobs" style={{ color: "white" }}>
            Jobs
          </Link>
        </div>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      <div style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  );
}