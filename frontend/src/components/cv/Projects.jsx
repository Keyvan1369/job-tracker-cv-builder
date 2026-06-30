export default function Projects({ projects }) {

  if (!projects?.length) return null;

  return (
    <>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="preview-item">

          <h3>{project.name}</h3>

          <strong>{project.technologies}</strong>

          <p>{project.description}</p>

        </div>
      ))}
    </>
  );
}