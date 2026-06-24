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
    experiences: [{ company: "", position: "", period: "", description: "" }],
    educations: [{ school: "", degree: "", year: "" }],
  });

  const handleChange = (e) => {
    setCvData({
      ...cvData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNestedChange = (index, section, field, value) => {
    const updated = [...cvData[section]];
    updated[index][field] = value;
    setCvData({
      ...cvData,
      [section]: updated,
    });
  };

  const addItem = (section, emptyObject) => {
    setCvData({
      ...cvData,
      [section]: [...cvData[section], emptyObject],
    });
  };

  const downloadPDF = async () => {
    const canvas = await html2canvas(cvRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${cvData.fullName || "resume"}.pdf`);
  };

  return (
    <div className="cv-container">
      {/* بخش فرم ورودی */}
      <div className="cv-form">
        <h1>CV Builder</h1>
        <p>Create your professional resume</p>

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
        <input
          name="skills"
          placeholder="React, Node.js, MongoDB..."
          value={cvData.skills}
          onChange={handleChange}
        />

        <h2>Experience</h2>
        {cvData.experiences.map((exp, index) => (
          <div className="experience-box" key={index}>
            <input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleNestedChange(index, "experiences", "company", e.target.value)}
            />
            <input
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleNestedChange(index, "experiences", "position", e.target.value)}
            />
            <input
              placeholder="Period"
              value={exp.period}
              onChange={(e) => handleNestedChange(index, "experiences", "period", e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) => handleNestedChange(index, "experiences", "description", e.target.value)}
            />
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={() => addItem("experiences", { company: "", position: "", period: "", description: "" })}
        >
          + Add Experience
        </button>

        <h2>Education</h2>
        {cvData.educations.map((edu, index) => (
          <div className="experience-box" key={index}>
            <input
              placeholder="School"
              value={edu.school}
              onChange={(e) => handleNestedChange(index, "educations", "school", e.target.value)}
            />
            <input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleNestedChange(index, "educations", "degree", e.target.value)}
            />
            <input
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleNestedChange(index, "educations", "year", e.target.value)}
            />
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={() => addItem("educations", { school: "", degree: "", year: "" })}
        >
          + Add Education
        </button>

        <button className="download-btn" onClick={downloadPDF}>
          <span>Download PDF</span>
        </button>
      </div>

      {/* بخش پیش‌نمایش رزومه */}
      <div className="cv-preview" ref={cvRef}>
        <h1>{cvData.fullName || "Your Name"}</h1>
        <p>
          {cvData.email}
          {cvData.email && cvData.phone && " | "}
          {cvData.phone}
        </p>
        <p>{cvData.location}</p>

        {cvData.summary && <><hr /><h2>Summary</h2><p>{cvData.summary}</p></>}

        {cvData.skills && (
          <>
            <h2>Skills</h2>
            <div className="skills-preview">
              {cvData.skills
                .split(",")
                .filter(Boolean)
                .map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill.trim()}
                  </span>
                ))}
            </div>
          </>
        )}

        {cvData.experiences.some(e => e.position || e.company) && <h2>Experience</h2>}
        {cvData.experiences.map((exp, index) => (
          (exp.position || exp.company) && (
            <div key={index} className="preview-item">
              <h3>{exp.position}</h3>
              <strong>{exp.company}</strong>
              <span className="period-text">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          )
        ))}

        {cvData.educations.some(e => e.degree || e.school) && <h2>Education</h2>}
        {cvData.educations.map((edu, index) => (
          (edu.degree || edu.school) && (
            <div key={index} className="preview-item">
              <h3>{edu.degree}</h3>
              <strong>{edu.school}</strong>
              <span className="period-text">{edu.year}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
}