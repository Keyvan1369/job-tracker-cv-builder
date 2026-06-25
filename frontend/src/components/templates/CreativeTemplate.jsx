import "../../styles/template/CreativeTemplate.css"

export default function CreativeTemplate({
  cvData,
}) {
  return (
    <div className="creative-template">

      <div className="sidebar">

        <h2>
          Contact
        </h2>

        <p>{cvData.email}</p>

        <p>{cvData.phone}</p>

      </div>

      <div className="content">

        <h1>
          {cvData.fullName}
        </h1>

        <p>
          {cvData.summary}
        </p>

      </div>

    </div>
  );
}