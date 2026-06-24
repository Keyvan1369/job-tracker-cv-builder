import { useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "../styles/CVBuilder.css";

export default function CVBuilder() {
  const cvRef = useRef();

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

  const downloadPDF = async () => {
    const element = cvRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("resume.pdf");
  };

  return (
    <div className="cv-container">

      <div className="cv-form">

        <h1>CV Builder</h1>

        <p>
          Create your professional resume
        </p>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={cvData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={cvData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={cvData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
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
          placeholder="Skills (React, Node.js, MongoDB...)"
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

        <button
          className="download-btn"
          onClick={downloadPDF}
        >
          Download PDF
        </button>

      </div>

      <div
        className="cv-preview"
        ref={cvRef}
      >

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

        <section>
          <h2>Professional Summary</h2>

          <p>
            {cvData.summary ||
              "Write a short summary about yourself."}
          </p>
        </section>

        <section>
          <h2>Skills</h2>

          <p>
            {cvData.skills ||
              "React, JavaScript, Node.js"}
          </p>
        </section>

        <section>
          <h2>Experience</h2>

          <p>
            {cvData.experience ||
              "Describe your work experience."}
          </p>
        </section>

        <section>
          <h2>Education</h2>

          <p>
            {cvData.education ||
              "Describe your education."}
          </p>
        </section>

      </div>

    </div>
  );
}