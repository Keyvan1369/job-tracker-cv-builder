import "../../styles/template/MinimalTemplate.css"

export default function MinimalTemplate({
  cvData,
}) {
  return (
    <div className="minimal-template">

      <h1>
        {cvData.fullName}
      </h1>

      <p>
        {cvData.email}
      </p>

      <p>
        {cvData.phone}
      </p>

      <h2>Experience</h2>

      {cvData.experiences.map(
        (exp, index) => (
          <div key={index}>

            <strong>
              {exp.position}
            </strong>

            <p>
              {exp.company}
            </p>

          </div>
        )
      )}

    </div>
  );
}