import Card from "../ui/Card.jsx";
import Section from "../ui/Section.jsx";
import Badge from "../ui/Badge.jsx";
import Header from "../cv/Header.jsx";
import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";
import Projects from "../cv/Projects.jsx";
import Languages from "../cv/Languages.jsx";

import "../../styles/template/DeveloperTemplate.css";


export default function DeveloperTemplate({ data }) {

  if (!data) return null;

  return (
    <div className="developer-template">

      <Header data={data}/>

      <div className="developer-grid">

        <div className="developer-left">

          <Card>

            <Section title="About">

              <Summary data={data}/>

            </Section>

          </Card>

          <Card>

            <Section title="Projects">

              <Projects data={data}/>

            </Section>

          </Card>

        </div>

        <div className="developer-right">

          <Card>

            <Section title="Tech Stack">

              <Skills data={data}/>

            </Section>

          </Card>

          <Card>

            <Section title="Experience">

              <Experience data={data}/>

            </Section>

          </Card>

          <Card>

            <Section title="Education">

              <Education data={data}/>

            </Section>

          </Card>

          <Card>

            <Section title="Language">

              <Languages data={data} />

            </Section>

          </Card>

        </div>

      </div>

    </div>
  );
}