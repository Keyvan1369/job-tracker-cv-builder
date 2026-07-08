export default function CertificationsForm({
  cvData,
  handleNestedChange,
  addItem,
}) {
  return (
    <>

      {cvData.certifications.map((cert, index) => (
        <div className="experience-box" key={index}>
          <input
            placeholder="Certificate Name"
            value={cert.name}
            onChange={(e) =>
              handleNestedChange(
                index,
                "certifications",
                "name",
                e.target.value
              )
            }
          />

          <input
            placeholder="Issuer"
            value={cert.issuer}
            onChange={(e) =>
              handleNestedChange(
                index,
                "certifications",
                "issuer",
                e.target.value
              )
            }
          />

          <input
            placeholder="Year"
            value={cert.year}
            onChange={(e) =>
              handleNestedChange(
                index,
                "certifications",
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
          addItem("certifications", {
            name: "",
            issuer: "",
            year: "",
          })
        }
      >
        + Add Certification
      </button>
    </>
  );
}