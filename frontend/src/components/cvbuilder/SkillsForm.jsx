export default function SkillsForm({
  cvData,
  handleChange,
}) {
  return (
    <div className="form-section">


      <input
        name="skills"
        placeholder="React, Node.js, MongoDB..."
        value={cvData.skills}
        onChange={handleChange}
      />

     
    </div>
  );
}