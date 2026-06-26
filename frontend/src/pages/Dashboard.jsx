import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import JobStatusChart from "../components/JobStatusChart";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // تعریف تابع به صورت مجزا
  const fetchJobs = async () => {
    try {
      setLoading(true); // شروع بارگذاری
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false); // پایان بارگذاری در هر صورت
    }
  };

  // فراخوانی تابع هنگام لود شدن صفحه
  useEffect(() => {
    fetchJobs();
  }, []);

  // محاسبه آمار
  const totalJobs = jobs.length;
  const appliedJobs = jobs.filter((job) => job.status === "Applied").length;
  const interviewJobs = jobs.filter((job) => job.status === "Interview").length;
  const offerJobs = jobs.filter((job) => job.status === "Offer").length;
  const rejectedJobs = jobs.filter((job) => job.status === "Rejected").length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Hello {user?.name || "User"}</h1>
          <p>Welcome back to your career hub.</p>
          <h2>Application Statistics</h2>
          <JobStatusChart jobs={jobs} />
          
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Jobs</h3>
                <span>{totalJobs}</span>
              </div>
              <div className="stat-card">
                <h3>Applied</h3>
                <span>{appliedJobs}</span>
              </div>
              <div className="stat-card">
                <h3>Interview</h3>
                <span>{interviewJobs}</span>
              </div>
              <div className="stat-card">
                <h3>Offer</h3>
                <span>{offerJobs}</span>
              </div>
              <div className="stat-card">
                <h3>Rejected</h3>
                <span>{rejectedJobs}</span>
              </div>
            </div>

            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button onClick={() => navigate("/jobs")}>Job Tracker</button>
                <button onClick={() => navigate("/cv-builder")}>CV Builder</button>
                <button onClick={() => navigate('/my-cvs')}>My CVs</button>
              </div>
            </div>

            <div className="recent-section">
              <h2>Recent Applications</h2>
              {jobs.length === 0 ? (
                <div className="empty-state">No job applications yet.</div>
              ) : (
                jobs.slice(0, 5).map((job) => (
                  <div className="recent-card" key={job._id || job.id}>
                    <h3>{job.company}</h3>
                    <p>{job.title}</p>
                    <span className={`status-${job.status?.toLowerCase()}`}>{job.status}</span>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}