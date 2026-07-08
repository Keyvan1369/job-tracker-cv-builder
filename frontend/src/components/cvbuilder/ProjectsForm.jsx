export default function ProjectsForm({
  cvData,
  handleNestedChange,
  addItem,
}) {
  return (
    <>
      
      {cvData.projects.map((project, index) => (
        <div className="experience-box" key={index}>
          <input
            placeholder="Project Name"
            value={project.name}
            onChange={(e) =>
              handleNestedChange(
                index,
                "projects",
                "name",
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Description"
            value={project.description}
            onChange={(e) =>
              handleNestedChange(
                index,
                "projects",
                "description",
                e.target.value
              )
            }
          />

          <input
            placeholder="GitHub URL"
            value={project.github}
            onChange={(e) =>
              handleNestedChange(
                index,
                "projects",
                "github",
                e.target.value
              )
            }
          />

          <input
            placeholder="Live Demo"
            value={project.demo}
            onChange={(e) =>
              handleNestedChange(
                index,
                "projects",
                "demo",
                e.target.value
              )
            }
          />

          <input
            placeholder="React, Node.js, MongoDB..."
            value={project.technologies}
            onChange={(e) =>
              handleNestedChange(
                index,
                "projects",
                "technologies",
                e.target.value
              )
            }
          />
        </div>
      ))}

      <button
        type="button"
        className="add-btn"
        onClick={() =>
          addItem("projects", {
            name: "",
            description: "",
            github: "",
            demo: "",
            technologies: "",
          })
        }
      >
        + Add Project
      </button>
    </>
  );
}