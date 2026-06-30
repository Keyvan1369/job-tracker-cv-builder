import Header from "../cv/Header.jsx";
import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";

import "../../styles/template/SpectrumPulseTemplate.css";

export default function SpectrumPulseTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="colored-minimal-template">
      {/* هدر با المان‌های رنگی ظریف */}
      <header className="cm-header">
        <div className="cm-profile">
          <h1 className="cm-name">{data.fullName}</h1>
          {data.jobTitle && <span className="cm-title-badge">{data.jobTitle}</span>}
        </div>

        <div className="cm-contact-grid">
          {data.email && (
            <div className="cm-contact-item">
              <span className="cm-icon">@</span>
              <span className="cm-text">{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="cm-contact-item">
              <span className="cm-icon">#</span>
              <span className="cm-text">{data.phone}</span>
            </div>
          )}
          {data.location && (
            <div className="cm-contact-item">
              <span className="cm-icon">⚲</span>
              <span className="cm-text">{data.location}</span>
            </div>
          )}
        </div>
      </header>

      {/* خط جداکننده دو رنگ */}
      <div className="cm-divider"></div>

      <div className="cm-main-layout">
        {/* ستون سمت چپ */}
        <div className="cm-main-col">
          <section className="cm-section cm-highlight-section">
            <Summary data={data} />
          </section>

          <section className="cm-section cm-timeline-section">
            <h2 className="cm-section-title">Experience</h2>
            <Experience data={data} />
          </section>
        </div>

        {/* ستون سمت راست */}
        <div className="cm-sidebar-col">
          <section className="cm-section cm-sidebar-card">
            <h2 className="cm-section-title">Skills</h2>
            <Skills data={data} />
          </section>

          <section className="cm-section cm-sidebar-card">
            <h2 className="cm-section-title">Education</h2>
            <Education data={data} />
          </section>
        </div>
      </div>
    </div>
  );
}