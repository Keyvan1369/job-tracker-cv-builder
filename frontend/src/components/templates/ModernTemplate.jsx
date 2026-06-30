import "../../styles/template/ModernTemplate.css";

import Header from "../cv/Header.jsx";
import Summary from "../cv/Summary.jsx";
import Skills from "../cv/Skills.jsx";
import Experience from "../cv/Experience.jsx";
import Education from "../cv/Education.jsx";

export default function ModernTemplate({ data }) {
  return (
    <div className="modern-template">

     <Header
    fullName={data.fullName}
    email={data.email}
    phone={data.phone}
    location={data.location}
/>

<Summary data={data} />

<Skills data={data} />

<Experience data={data} />

<Education data={data} />
    </div>
  );
}