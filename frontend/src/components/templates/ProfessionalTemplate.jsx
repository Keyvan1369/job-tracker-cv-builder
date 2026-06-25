import "../../styles/template/ProfessionalTemplate.css"


export default function ProfessionalTemplate({
  cvData,
}) {
  return (
    <div className="professional-template">

      <div className="left-side">

        <h2>Contact</h2>

        <p>{cvData.email}</p>

        <p>{cvData.phone}</p>

        <p>{cvData.location}</p>

      </div>

      <div className="right-side">

        <h1>
          {cvData.fullName}
        </h1>

        <h2>Summary</h2>

        <p>
          {cvData.summary}
        </p>

      </div>

    </div>
  );
}