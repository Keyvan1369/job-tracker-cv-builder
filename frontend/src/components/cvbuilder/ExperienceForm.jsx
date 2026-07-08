export default function ExperienceForm({
  cvData,
  handleNestedChange,
  addItem,
}) {
  return (
    <>
      
      {cvData.experiences.map((exp, index) => (
        <div className="experience-box" key={index}>
          <input
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              handleNestedChange(
                index,
                "experiences",
                "company",
                e.target.value
              )
            }
          />

          <input
            placeholder="Position"
            value={exp.position}
            onChange={(e) =>
              handleNestedChange(
                index,
                "experiences",
                "position",
                e.target.value
              )
            }
          />

          <input
            placeholder="Period"
            value={exp.period}
            onChange={(e) =>
              handleNestedChange(
                index,
                "experiences",
                "period",
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) =>
              handleNestedChange(
                index,
                "experiences",
                "description",
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
          addItem("experiences", {
            company: "",
            position: "",
            period: "",
            description: "",
          })
        }
      >
        + Add Experience
      </button>
    </>
  );
}