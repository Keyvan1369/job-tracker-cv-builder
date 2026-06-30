import Header from "../cv/Header";
import Summary from "../cv/Summary";
import Skills from "../cv/Skills";
import Experience from "../cv/Experience";
import Education from "../cv/Education";

import "../../styles/template/ExecutiveTemplate.css";

export default function ExecutiveTemplate({ data }) {
  return (
    <div className="executive-template">


    <h1>{data.fullName}</h1>

    <h2>{data.jobTitle}</h2>

    <div className="contact-row">

    <span>{data.email}</span>

    <span>{data.phone}</span>

    <span>{data.location}</span>

  </div>
    <Summary data={data.summary} />

    <Experience data={data.experiences} />

    <Skills data={data.skills} />

    <Education data={data.educations} />
    </div>
  );
}