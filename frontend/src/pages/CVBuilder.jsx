import { useState } from "react";

import "../styles/CVBuilder.css";

export default function CVBuilder() {

  const [cvData, setCvData] = useState({

    fullName: "",

    email: "",

    phone: "",

    location: "",

    summary: "",

    skills: "",

    experience: "",

    education: "",

  });

  const handleChange = (e) => {

    setCvData({

      ...cvData,

      [e.target.name]: e.target.value,

    });

  };

  return (

    <div className="cv-container">

      <div className="cv-form">

        <h1>CV Builder</h1>

        <p>
          Create your professional resume
        </p>

        <input
          name="fullName"
          placeholder="Full Name"
          value={cvData.fullName}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={cvData.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={cvData.phone}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={cvData.location}
          onChange={handleChange}
        />

        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={cvData.summary}
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          value={cvData.skills}
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Work Experience"
          value={cvData.experience}
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          value={cvData.education}
          onChange={handleChange}
        />

      </div>

      <div className="cv-preview">

        <h1>

          {cvData.fullName || "Your Name"}

        </h1>

        <p>

          {cvData.email}

          {cvData.email && " | "}

          {cvData.phone}

        </p>

        <p>

          {cvData.location}

        </p>

        <hr />

        <h2>Summary</h2>

        <p>

          {cvData.summary}

        </p>

        <h2>Skills</h2>

        <p>

          {cvData.skills}

        </p>

        <h2>Experience</h2>

        <p>

          {cvData.experience}

        </p>

        <h2>Education</h2>

        <p>

          {cvData.education}

        </p>

      </div>

    </div>

  );
}