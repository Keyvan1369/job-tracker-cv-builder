export default function Languages({ data }) {
  if (!data?.languages || data.languages.length === 0) return null;

  return (
    <div className="languages-display-section">
      {data.languages.map((lang, index) => (
        <div className="experience-box" key={index} style={{ marginBottom: '15px' }}>
          <h3 style={{ margin: 0, fontSize: '1.17em', fontWeight: 'bold' }}>
            {lang.language}
          </h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            {lang.level}
          </p>
        </div>
      ))}
    </div>
  );
}