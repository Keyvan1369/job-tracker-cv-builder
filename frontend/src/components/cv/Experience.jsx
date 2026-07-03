export default function Experience({ data }) {
  if (!data.experiences?.length) return null;

  return (
    <>
      {data.experiences.map((exp, index) => (
        <div key={index} className="preview-item">
          <h3>{exp.position}</h3>
          <strong>{exp.company}</strong>
          <p>{exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </>
  );
}