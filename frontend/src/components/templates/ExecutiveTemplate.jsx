import Header from "../cv/Header.jsx";
import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";
import Projects from "../cv/Projects.jsx";
import "../../styles/template/ExecutiveTemplate.css";

export default function ExecutiveTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="executive-template">
      <header className="executive-header">
        <div className="header-main">
          <h1 className="executive-name">{data.fullName}</h1>
          {data.jobTitle && <h2 className="executive-title">{data.jobTitle}</h2>}
        </div>

        <div className="contact-grid">
          {data.email && (
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">{data.phone}</span>
            </div>
          )}
          {data.location && (
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">{data.location}</span>
            </div>
          )}
        </div>
      </header>

      <div className="executive-layout">
        <main className="executive-main-content">
          <section className="section-wrapper">
            <Summary data={data} />
          </section>
          <section className="section-wrapper">
            <Experience data={data} />
          </section>
          <section className="section-wrapper">
            <Projects data={data} />
          </section>
        </main>

        <aside className="executive-sidebar">
          <section className="section-wrapper">
            <Skills data={data} />
          </section>
          <section className="section-wrapper">
            <Education data={data} />
          </section>
        </aside>
      </div>
    </div>
  );
}