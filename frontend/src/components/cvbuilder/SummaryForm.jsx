export default function SummaryForm({
  cvData,
  handleChange,
}) {
  return (
    <div className="form-section">
      

      <textarea
        name="summary"
        placeholder="Write a short professional summary..."
        value={cvData.summary}
        onChange={handleChange}
        rows={6}
      />
    </div>
  );
}