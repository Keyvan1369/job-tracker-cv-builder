import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/MyCVs.css"
export default function MyCVs() {
  const [cvs, setCvs] = useState([]);

  const fetchCVs = async () => {
    try {
      const res = await api.get("/cvs");

      setCvs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCVs();
  }, []);

  return (
    <div className="page-container">

      <h1>My CVs</h1>

      {cvs.length === 0 ? (
        <p>No CVs found</p>
      ) : (
        cvs.map((cv) => (
          <div
            key={cv._id}
            className="cv-card"
          >
            <h2>
              {cv.fullName}
            </h2>

            <p>
              {cv.email}
            </p>

            <p>
              {new Date(
                cv.createdAt
              ).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}