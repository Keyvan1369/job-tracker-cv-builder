import "../../styles/template/MinimalTemplate.css"

export default function MinimalTemplate({
  data,
}) {
  return (
    <div className="minimal-template">

      <h1>
        {data.fullName}
      </h1>

      <p>
        {data.email}
      </p>

      <p>
        {data.phone}
      </p>

      <h2>Experience</h2>

      {data.experiences.map(
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