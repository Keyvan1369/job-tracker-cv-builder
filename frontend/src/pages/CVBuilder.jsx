import { useRef, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import api from "../services/api";
import { askAI, checkATS } from "../services/aiService.js";
import { useAuth } from "../context/authContext.jsx";
import TemplateRenderer from "../components/templates/TemplateRenderer.jsx";
import TemplateGallery from "../components/templates/TemplateGallery.jsx";
import PersonalInfoForm from "../components/cvbuilder/PersonalInfoForm.jsx";
import SocialLinksForm from "../components/cvbuilder/SocialLinksForm.jsx";
import SummaryForm from "../components/cvbuilder/SummaryForm.jsx";
import SkillsForm from "../components/cvbuilder/SkillsForm.jsx";
import ExperienceForm from "../components/cvbuilder/ExperienceForm.jsx";
import EducationForm from "../components/cvbuilder/EducationForm.jsx";
import ProjectsForm from "../components/cvbuilder/ProjectsForm.jsx";
import LanguagesForm from "../components/cvbuilder/LanguagesForm.jsx";
import CertificationsForm from "../components/cvbuilder/CertificationsForm.jsx";
import ResumeAnalysisCard from "../components/ai/ResumeAnalysisCard";
import AILoading from "../components/ai/AILoading";
import PreviewOverlay from "../components/ai/PreviewOverlay";
import useAIImprove from "../hooks/useAIImprove";
import ATSResultCard from "../components/ai/ATSResultCard";
import "../styles/CVBuilder.css";

export default function CVBuilder() {
  const cvRef = useRef();
  const { id } = useParams();
  const { user } = useAuth();

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
    projects: [
      { name: "", technologies: "", github: "", live: "", description: "" },
    ],
    languages: [{ language: "English", level: "Fluent" }],
    certifications: [{ name: "", issuer: "", year: "" }],
  });

  const [template, setTemplate] = useState("modern");

  const handleChange = (e) => {
    setCvData({
      ...cvData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTemplateChange = (newTemplate) => {
    setTemplate(newTemplate);
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
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
      });
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
  const [analysis, setAnalysis] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const { improve, loading } = useAIImprove();
  const [jobDescription, setJobDescription] = useState("");
  const [atsLoading, setATSLoading] = useState(false);
  const [atsResult, setATSResult] = useState(null);

  const analyzeResume = async () => {
    try {
      setLoadingAI(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const result = await askAI("resume-score", cvData, user.token);

      setAnalysis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAI(false);
    }
  };
  const improveField = async (
    field,

    value,
  ) => {
    const improved = await improve(
      field,

      value,

      user.token,
    );

    if (!improved) return;

    setCvData((prev) => ({
      ...prev,

      [field]: improved,
    }));
  };
  const analyzeATS = async () => {
    if (!jobDescription.trim()) {
      alert("Please paste a job description.");

      return;
    }

    try {
      setATSLoading(true);

      const result = await checkATS(
        cvData,

        jobDescription,

        user.token,
      );

      setATSResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setATSLoading(false);
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
        experiences:
          data.experiences && data.experiences.length > 0
            ? data.experiences
            : [{ company: "", position: "", period: "", description: "" }],
        educations:
          data.educations && data.educations.length > 0
            ? data.educations
            : [{ school: "", degree: "", year: "" }],
        projects:
          data.projects && data.projects.length > 0
            ? data.projects
            : [
                {
                  name: "",
                  technologies: "",
                  github: "",
                  live: "",
                  description: "",
                },
              ],
        languages:
          data.languages && data.languages.length > 0
            ? data.languages
            : [{ language: "", level: "" }],

        certifications:
          data.certifications && data.certifications.length > 0
            ? data.certifications
            : [{ name: "", issuer: "", year: "" }],
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
        <PersonalInfoForm cvData={cvData} handleChange={handleChange} />

        <h3>Links & Socials</h3>
        <SocialLinksForm cvData={cvData} handleChange={handleChange} />

        <h3>Skills</h3>
        <SkillsForm cvData={cvData} handleChange={handleChange} />

        <h3>Summary</h3>
        <SummaryForm cvData={cvData} handleChange={handleChange} />

        <h2>Experience</h2>
        <ExperienceForm
          cvData={cvData}
          handleNestedChange={handleNestedChange}
          addItem={addItem}
        />

        <h2>Education</h2>
        <EducationForm
          cvData={cvData}
          handleNestedChange={handleNestedChange}
          addItem={addItem}
        />

        <h2>Projects</h2>
        <ProjectsForm
          cvData={cvData}
          handleNestedChange={handleNestedChange}
          addItem={addItem}
        />

        <h2>Languages</h2>
        <LanguagesForm
          cvData={cvData}
          handleNestedChange={handleNestedChange}
          addItem={addItem}
        />

        <h2>Certifications</h2>
        <CertificationsForm
          cvData={cvData}
          handleNestedChange={handleNestedChange}
          addItem={addItem}
        />

        <div className="action-buttons">
          <button className="download-btn" onClick={downloadPDF}>
            <span>Download PDF</span>
          </button>
          <button className="save-btn" onClick={saveCV}>
            Save CV
          </button>
          <button onClick={analyzeResume}>Analyze Resume</button>
          <div className="ats-section">
            <h2>ATS Job Match</h2>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={10}
              placeholder="Paste a job description here..."
            />
            {atsResult && <ATSResultCard result={atsResult} />}
            <button onClick={analyzeATS} disabled={atsLoading}>
              {atsLoading ? "Analyzing..." : "Check ATS Match"}
            </button>
          </div>
        </div>
      </div>

      <div className="cv-preview-sidebar">
        <div className="template-selector">
          <label>Select Template: </label>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="modern">Modern</option>
            <option value="professional">Professional</option>
            <option value="minimal">Minimal</option>
            <option value="creative">Creative</option>
            <option value="executive">Executive</option>
            <option value="spectrum-pulse">Spectrum Pulse</option>
            <option value="developer">Developer Neon</option>
          </select>
          <TemplateGallery
            template={template}
            onTemplateChange={handleTemplateChange}
            data={cvData}
          />
        </div>

        <div className="cv-preview fade-preview" ref={cvRef}>
          {loadingAI && <PreviewOverlay />}

          <TemplateRenderer
            template={template}
            data={cvData}
            analysis={analysis}
            onImproveSummary={() =>
              improveField(
                "summary",

                cvData.summary,
              )
            }
            loadingSummary={loading}
          />
        </div>
        <ResumeAnalysisCard analysis={analysis} />
      </div>
    </div>
  );
}
