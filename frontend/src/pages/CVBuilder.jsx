import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import api from "../services/api";
import TemplateRenderer from "../components/templates/TemplateRenderer.jsx";
import TemplateGallery from "../components/templates/TemplateGallery.jsx";
import "../styles/CVBuilder.css";

export default function CVBuilder() {
  const cvRef = useRef();
  const { id } = useParams();

  const [cvData, setCvData] = useState({
    jobTitle: "",
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    skills: "",
    github: "",
    linkedin: "",
    portfolio: "",
    experiences: [{ company: "", position: "", period: "", description: "" }],
    educations: [{ school: "", degree: "", year: "" }],
    projects: [{ name: "", technologies: "", github: "", live: "", description: "" }],
    languages: [],
    certifications: [],
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

  const removeItem = (section, index) => {
    const updated = cvData[section].filter((_, i) => i !== index);
    setCvData({
      ...cvData,
      [section]: updated,
    });
  };

  const downloadPDF = async () => {
    if (!cvRef.current) return;
    try {
      const canvas = await html2canvas(cvRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${cvData.fullName || "resume"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to download PDF");
    }
  };

  const saveCV = async () => {
    try {
      let res;
      if (id) {
        res = await api.put(`/cvs/${id}`, { ...cvData, template });
      } else {
        res = await api.post("/cvs", { ...cvData, template });
      }
      console.log(res.data);
      alert("CV saved successfully!");
    } catch (error) {
      console.error("FULL ERROR:", error);
      console.error("RESPONSE:", error.response);
      alert("Failed to save CV");
    }
  };

  const fetchCV = async () => {
    try {
      const res = await api.get(`/cvs/${id}`);
      const data = res.data;

      setCvData({
        jobTitle: data.jobTitle || "",
        fullName: data.fullName || "",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
        summary: data.summary || "",
        skills: data.skills || "",
        github: data.github || "",
        linkedin: data.linkedin || "",
        portfolio: data.portfolio || "",
        experiences: data.experiences && data.experiences.length > 0
          ? data.experiences
          : [{ company: "", position: "", period: "", description: "" }],
        educations: data.educations && data.educations.length > 0
          ? data.educations
          : [{ school: "", degree: "", year: "" }],
        projects: data.projects && data.projects.length > 0
          ? data.projects
          : [{ name: "", technologies: "", github: "", live: "", description: "" }],
        languages: data.languages || [],
        certifications: data.certifications || [],
      });

      if (data.template) {
        setTemplate(data.template);
      }
    } catch (error) {
      console.error("Error fetching CV:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCV();
    }
  }, [id]);

  return (
    <div className="cv-container">
      <div className="cv-form">
        <h1>CV Builder</h1>
        <p>Create your professional resume</p>

        <h3>Personal Information</h3>
        <input name="jobTitle" placeholder="Job Title" value={cvData.jobTitle} onChange={handleChange} />
        <input name="fullName" placeholder="Full Name" value={cvData.fullName} onChange={handleChange} />
        <input name="email" placeholder="Email" value={cvData.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={cvData.phone} onChange={handleChange} />
        <input name="location" placeholder="Location" value={cvData.location} onChange={handleChange} />
        <textarea name="summary" placeholder="Professional Summary" value={cvData.summary} onChange={handleChange} />
        <input name="skills" placeholder="React, Node.js, MongoDB..." value={cvData.skills} onChange={handleChange} />

        <h3>Links & Socials</h3>
        <input name="github" placeholder="GitHub Profile URL" value={cvData.github} onChange={handleChange} />
        <input name="linkedin" placeholder="LinkedIn Profile URL" value={cvData.linkedin} onChange={handleChange} />
        <input name="portfolio" placeholder="Portfolio Website URL" value={cvData.portfolio} onChange={handleChange} />

        <h2>Experience</h2>
        {cvData.experiences.map((exp, index) => (
          <div className="experience-box" key={index}>
            <input placeholder="Company" value={exp.company} onChange={(e) => handleNestedChange(index, "experiences", "company", e.target.value)} />
            <input placeholder="Position" value={exp.position} onChange={(e) => handleNestedChange(index, "experiences", "position", e.target.value)} />
            <input placeholder="Period" value={exp.period} onChange={(e) => handleNestedChange(index, "experiences", "period", e.target.value)} />
            <textarea placeholder="Description" value={exp.description} onChange={(e) => handleNestedChange(index, "experiences", "description", e.target.value)} />
            {cvData.experiences.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeItem("experiences", index)}>Delete</button>
            )}
          </div>
        ))}
        <button type="button" className="add-btn" onClick={() => addItem("experiences", { company: "", position: "", period: "", description: "" })}>
          + Add Experience
        </button>

        <h2>Education</h2>
        {cvData.educations.map((edu, index) => (
          <div className="experience-box" key={index}>
            <input placeholder="School" value={edu.school} onChange={(e) => handleNestedChange(index, "educations", "school", e.target.value)} />
            <input placeholder="Degree" value={edu.degree} onChange={(e) => handleNestedChange(index, "educations", "degree", e.target.value)} />
            <input placeholder="Year" value={edu.year} onChange={(e) => handleNestedChange(index, "educations", "year", e.target.value)} />
            {cvData.educations.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeItem("educations", index)}>Delete</button>
            )}
          </div>
        ))}
        <button type="button" className="add-btn" onClick={() => addItem("educations", { school: "", degree: "", year: "" })}>
          + Add Education
        </button>

        <h2>Projects</h2>
        {cvData.projects.map((project, index) => (
          <div className="experience-box" key={index}>
            <input placeholder="Project Name" value={project.name} onChange={(e) => handleNestedChange(index, "projects", "name", e.target.value)} />
            <input placeholder="Technologies" value={project.technologies} onChange={(e) => handleNestedChange(index, "projects", "technologies", e.target.value)} />
            <input placeholder="GitHub URL" value={project.github} onChange={(e) => handleNestedChange(index, "projects", "github", e.target.value)} />
            <input placeholder="Live Demo URL" value={project.live} onChange={(e) => handleNestedChange(index, "projects", "live", e.target.value)} />
            <textarea placeholder="Project Description" value={project.description} onChange={(e) => handleNestedChange(index, "projects", "description", e.target.value)} />
            {cvData.projects.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeItem("projects", index)}>Delete</button>
            )}
          </div>
        ))}
        <button type="button" className="add-btn" onClick={() => addItem("projects", { name: "", technologies: "", github: "", live: "", description: "" })}>
          + Add Project
        </button>

        <div className="action-buttons">
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
            <option value="executive">Executive</option>
            <option value="spectrum-pulse">Spectrum Pulse</option>
            <option value="developer">Developer Neon</option>
          </select>
          <TemplateGallery template={template} setTemplate={setTemplate}/>
        </div>

        <div
          key={template}
          className="cv-preview fade-preview"
          ref={cvRef}
        >
          <TemplateRenderer
            template={template}
            data={cvData}
          />
        </div>
      </div>
    </div>
  );
}