import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "Applied",
  });

  const [filter, setFilter] = useState("All");

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

 const addJob = async (e) => {
  e.preventDefault();

  if (!form.company.trim() || !form.title.trim()) {
    alert("Please enter both Company and Job Title.");
    return;
  }

  try {
    await api.post("/jobs", form);

    setForm({
      company: "",
      title: "",
      status: "Applied",
    });

    fetchJobs();

  } catch (error) {
    console.log(error);
  }
};

  const deleteJob = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/jobs/${id}`, {
        status,
      });
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1>Job Tracker</h1>
        <p>Track all your job applications</p>
      </div>

      <form className="job-form" onSubmit={addJob}>
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          required
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Job Title"
          value={form.title}
          required
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <button type="submit">Add Job</button>
      </form>

      <div className="filter-box">
        <label>Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>
      </div>

      <div className="jobs-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div className="job-card" key={job._id}> {/* اصلاح شد: _id */}
              <h2>{job.company}</h2>

              <p className="job-title">{job.title}</p>

              <span className={`status ${job.status.toLowerCase()}`}>
                {job.status}
              </span>

              <div className="actions">
                <select
                  value={job.status}
                  onChange={(e) =>
                    updateStatus(job._id, e.target.value) // اصلاح شد: _id
                  }
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Rejected</option>
                  <option>Offer</option>
                </select>

                <button
                  className="delete-btn"
                  onClick={() => deleteJob(job._id)} // اصلاح شد: _id
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}