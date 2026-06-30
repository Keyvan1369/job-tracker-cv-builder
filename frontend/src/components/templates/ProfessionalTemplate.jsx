import "../../styles/template/ProfessionalTemplate.css"


export default function ProfessionalTemplate({
  data,
}) {
  return (
    <div className="professional-template">

      <div className="left-side">

        <h2>Contact</h2>

        <p>{data.email}</p>

        <p>{data.phone}</p>

        <p>{data.location}</p>

      </div>

      <div className="right-side">

        <h1>
          {data.fullName}
        </h1>

        <h2>Summary</h2>

        <p>
          {data.summary}
        </p>

      </div>

    </div>
  );
}