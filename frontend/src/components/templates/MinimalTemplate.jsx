import Header from "../cv/Header.jsx";
import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";
import Projects from "../cv/Projects.jsx";
import "../../styles/template/MinimalTemplate.css";

export default function MinimalTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="minimal-template">
      <header className="minimal-header">
        <h1 className="minimal-name">{data.fullName}</h1>
        {data.jobTitle && <h2 className="minimal-title">{data.jobTitle}</h2>}

        <div className="contact-row">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </header>

      <main className="minimal-body">
        <Summary data={data} />
        <Experience data={data} />
        <Skills data={data} />
        <Education data={data} />
        <Projects data={data} />
      </main>
    </div>
  );
}