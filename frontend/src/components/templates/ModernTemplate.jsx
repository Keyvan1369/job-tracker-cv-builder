import Header from "../cv/Header.jsx";
import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";
import Projects from "../cv/Projects.jsx";
import "../../styles/template/ModernTemplate.css";


export default function ModernTemplate({ data,analysis}) {

  if (!data) return null;

  return (
          <div className="modern-template">
            <header className="executive-header">
              <h1 className="executive-name">{data.fullName}</h1>
              <h2 className="executive-title">{data.jobTitle}</h2>
              <div className="contact-row">
                {data.email && <span>{data.email}</span>}
                {data.phone && <span>{data.phone}</span>}
                {data.location && <span>{data.location}</span>}
              </div>
            </header>

            <main className="executive-body">
              <Summary data={data} analysis={analysis?.summary} />
              <Experience data={data} analysis={analysis?.skills}/>
              <Skills data={data} analysis={analysis?.skills}/>
              <Projects  data={data} analysis={analysis?.skills}/>
              <Education data={data} />
            </main>
          </div>
  );
}