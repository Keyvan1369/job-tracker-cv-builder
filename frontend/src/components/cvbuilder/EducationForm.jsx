export default function EducationForm({
  cvData,
  handleNestedChange,
  addItem,
}) {
  return (
    <>
      
      {cvData.educations.map((edu, index) => (
        <div className="experience-box" key={index}>
          <input
            placeholder="School"
            value={edu.school}
            onChange={(e) =>
              handleNestedChange(
                index,
                "educations",
                "school",
                e.target.value
              )
            }
          />

          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) =>
              handleNestedChange(
                index,
                "educations",
                "degree",
                e.target.value
              )
            }
          />

          <input
            placeholder="Year"
            value={edu.year}
            onChange={(e) =>
              handleNestedChange(
                index,
                "educations",
                "year",
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
          addItem("educations", {
            school: "",
            degree: "",
            year: "",
          })
        }
      >
        + Add Education
      </button>
    </>
  );
}