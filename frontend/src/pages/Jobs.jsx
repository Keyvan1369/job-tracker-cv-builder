import { useEffect, useState } from "react";
import api from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "Applied",
  });

  // GET JOBS
  const fetchJobs = async () => {
    const res = await api.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // CREATE JOB
  const addJob = async (e) => {
    e.preventDefault();

    await api.post("/jobs", form);

    setForm({ company: "", title: "", status: "Applied" });

    fetchJobs();
  };

  // DELETE JOB
  const deleteJob = async (id) => {
    await api.delete(`/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Tracker</h1>

      {/* FORM */}
      <form onSubmit={addJob}>
        <input
          placeholder="Company"
          value={form.company}
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
        />

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <button type="submit">Add Job</button>
      </form>

      <hr />

      {/* LIST */}
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid gray",
            margin: 10,
            padding: 10,
          }}
        >
          <h3>{job.company}</h3>
          <p>{job.title}</p>
          <p>Status: {job.status}</p>

          <button onClick={() => deleteJob(job.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}