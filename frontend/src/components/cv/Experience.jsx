import AIBadge from "../ai/AIBadge.jsx";

export default function Experience({ data,analysis }) {
  if (!data.experiences?.length) return null;

  return (
    <>
      {data.experiences.map((exp, index) => (
        <div key={index} className="preview-item">
          <AIBadge analysis={analysis}/>
          <h3>{exp.position}</h3>
          <strong>{exp.company}</strong>
          <p>{exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </>
  );
}