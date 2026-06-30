import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";

import "../../styles/template/ProfessionalTemplate.css";

export default function ProfessionalTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="professional-template">
      <aside className="left-side">
        <h2>Contact</h2>
        {data.email && <p className="contact-item">{data.email}</p>}
        {data.phone && <p className="contact-item">{data.phone}</p>}
        {data.location && <p className="contact-item">{data.location}</p>}

        <Skills data={data} />
      </aside>

      <main className="right-side">
        <header className="professional-header">
          <h1>{data.fullName}</h1>
          {data.jobTitle && <h2 className="job-title">{data.jobTitle}</h2>}
        </header>

        <Summary data={data} />
        <Experience data={data} />
        <Education data={data} />
      </main>
    </div>
  );
}