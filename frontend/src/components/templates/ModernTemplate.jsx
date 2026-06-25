export default function ModernTemplate({
  cvData,
}) {
  return (
    <div>

      <h1>
        {cvData.fullName}
      </h1>

      <p>
        {cvData.email}
      </p>

      <hr />

      <h2>Summary</h2>

      <p>
        {cvData.summary}
      </p>

      <h2>Skills</h2>

      {cvData.skills
        .split(",")
        .map((skill, index) => (
          <span
            key={index}
            className="skill-tag"
          >
            {skill.trim()}
          </span>
        ))}

    </div>
  );
}