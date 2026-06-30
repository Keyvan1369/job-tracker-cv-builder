import Header from "../cv/Header";
import Summary from "../cv/Summary";
import Skills from "../cv/Skills";
import Experience from "../cv/Experience";
import Education from "../cv/Education";

import "../../styles/template/ExecutiveTemplate.css";

export default function ExecutiveTemplate({ data }) {
  return (
    <div className="executive-template">

      <Header
        fullName={data.fullName}
        email={data.email}
        phone={data.phone}
        location={data.location}
      />

      <Summary data={data.summary} />

      <Experience data={data.experiences} />

      <Skills data={data.skills} />

      <Education data={data.educations} />

    </div>
  );
}