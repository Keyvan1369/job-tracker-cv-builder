export default function ActionButtons({
  saveCV,
  downloadPDF,
  loading,
}) {
  return (
    <div className="cv-actions">
      <button
        type="button"
        onClick={saveCV}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save CV"}
      </button>

      <button
        type="button"
        onClick={downloadPDF}
      >
         Download PDF
      </button>
    </div>
  );
}