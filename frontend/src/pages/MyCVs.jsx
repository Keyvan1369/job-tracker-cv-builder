import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/MyCVs.css";

export default function MyCVs() {
  const [cvs, setCvs] = useState([]);
  const navigate = useNavigate();

  const fetchCVs = async () => {
    try {
      const res = await api.get("/cvs");
      setCvs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (
  id
) => {
  try {
    await api.delete(
      `/cvs/${id}`
    );

    fetchCVs();
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchCVs();
  }, []);

  return (
    <div className="page-container">

      <div className="header-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>My CVs</h1>

      </div>

      {cvs.length === 0 ? (
        <p>No CVs found</p>
      ) : (
        cvs.map((cv) => (
          <div key={cv._id} className="cv-card">
            <h2>{cv.fullName}</h2>
            <p>{cv.email}</p>
            <p>{new Date(cv.createdAt).toLocaleDateString()}</p>
                <p>
                 Template:
                {cv.template}
                </p>
                <div className="cv-actions">
                  <button className="delete-btn" onClick={() =>handleDelete(cv._id)}>
                     Delete
                  </button>
                  <Link to={`/cv-builder/${cv._id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                </div>
          </div>
        ))
      )}

    </div>
  );
}