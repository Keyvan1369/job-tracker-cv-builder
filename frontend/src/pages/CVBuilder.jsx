import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import api from "../services/api";
import ModernTemplate from "../components/templates/ModernTemplate";
import ProfessionalTemplate from "../components/templates/ProfessionalTemplate";
import MinimalTemplate from "../components/templates/MinimalTemplate";
import CreativeTemplate from "../components/templates/CreativeTemplate";
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
  const [template, setTemplate] = useState("modern");

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

  const saveCV = async () => {
    try {
      const res = await api.post("/cvs", cvData);
      console.log(res.data);
      alert("CV saved successfully!");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);
      alert("Failed to save CV");
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case "professional":
        return <ProfessionalTemplate cvData={cvData} />;
      case "minimal":
        return <MinimalTemplate cvData={cvData} />;
      case "creative":
        return <CreativeTemplate cvData={cvData} />;
      default:
        return <ModernTemplate cvData={cvData} />;
    }
  };

  return (
    <div className="cv-container">
      
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

        <div className="action-buttons" style={{ marginTop: "20px" }}>
          <button className="download-btn" onClick={downloadPDF}>
            <span>Download PDF</span>
          </button>
          <button className="save-btn" onClick={saveCV}>
            Save CV
          </button>
        </div>
      </div>

      <div className="cv-preview-sidebar">
        <div className="template-selector">
          <label>Select Template: </label>
          <select value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="modern">Modern</option>
            <option value="professional">Professional</option>
            <option value="minimal">Minimal</option>
            <option value="creative">Creative</option>
          </select>
        </div>


        <div className="cv-preview" ref={cvRef}>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}