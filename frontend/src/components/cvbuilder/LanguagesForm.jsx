export default function LanguagesForm({
  cvData,
  handleNestedChange,
  addItem,
}) {
  const languagesList = cvData?.languages || [];

  return (
    <>
      {languagesList.length === 0 ? (
        <div className="experience-box">
          <input
            placeholder="Language"
            value=""
            onChange={(e) =>
              handleNestedChange(0, "languages", "language", e.target.value)
            }
          />
          <input
            placeholder="Level"
            value=""
            onChange={(e) =>
              handleNestedChange(0, "languages", "level", e.target.value)
            }
          />
        </div>
      ) : (
        languagesList.map((lang, index) => (
          <div className="experience-box" key={index}>
            <input
              placeholder="Language"
              value={lang.language || ""}
              onChange={(e) =>
                handleNestedChange(
                  index,
                  "languages",
                  "language",
                  e.target.value
                )
              }
            />

            <input
              placeholder="Level"
              value={lang.level || ""}
              onChange={(e) =>
                handleNestedChange(index, "languages", "level", e.target.value)
              }
            />
          </div>
        ))
      )}

      <button
        type="button"
        className="add-btn"
        onClick={() =>
          addItem("languages", {
            language: "",
            level: "",
          })
        }
      >
        + Add Language
      </button>
    </>
  );
}