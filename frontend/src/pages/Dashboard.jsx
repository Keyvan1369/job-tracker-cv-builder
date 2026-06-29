import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import api from "../services/api";
import JobStatusChart from "../components/JobStatusChart";

import { Box, Toolbar, Grid } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CancelIcon from "@mui/icons-material/Cancel";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import StatCard from "../components/dashboard/StatCard";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchStats = async () => {

  try {

    const res = await api.get(
      "/dashboard/stats"
    );

    setStats(res.data);

  }

  catch (error) {

    console.log(error);

  }

};

  useEffect(() => {
    fetchJobs();
    fetchStats();
  }, []);

  const [stats, setStats] = useState({

  jobs: 0,

  cvs: 0,

  interviews: 0,

  offers: 0,

});

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
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Topbar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />

        <div className="dashboard">
          <div className="dashboard-content">
            <div className="welcome-section">
              <h1>Hello {user?.name || "User"}!</h1>
              <p>Welcome back to your career hub.</p>
              <h2>Application Statistics</h2>
              <JobStatusChart jobs={jobs} />
            </div>

            {loading ? (
              <div className="loading">Loading...</div>
            ) : (
              <>
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                    <StatCard
                      title="Total Jobs"
                      value={totalJobs}
                      icon={<WorkIcon />}
                      color="primary"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                    <StatCard
                      title="Applied"
                      value={appliedJobs}
                      icon={<DescriptionIcon />}
                      color="info"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                    <StatCard
                      title="Interviews"
                      value={interviewJobs}
                      icon={<GroupsIcon />}
                      color="warning"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                    <StatCard
                      title="Offers"
                      value={offerJobs}
                      icon={<EmojiEventsIcon />}
                      color="success"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                    <StatCard
                      title="Rejected"
                      value={rejectedJobs}
                      icon={<CancelIcon />}
                      color="error"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                    <StatCard
                    title="CVs"
                    value={stats.cvs}
                    icon={<DescriptionIcon />}
                    color="secondary"
                    />
                  </Grid>
              </Grid>

                <div className="quick-actions">
                  <h2>Quick Actions</h2>
                  <div className="action-buttons">
                    <button onClick={() => navigate("/jobs")}>Job Tracker</button>
                    <button onClick={() => navigate("/cv-builder")}>CV Builder</button>
                    <button onClick={() => navigate("/my-cvs")}>My CVs</button>
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
                        <span className={`status-${job.status?.toLowerCase()}`}>
                          {job.status}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Box>
    </Box>
  );
}