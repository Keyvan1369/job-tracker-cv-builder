export default function Certifications({ data }) {
  if (!data.certifications?.length) return null;

  return (
    <>
      {data.certifications.map((cert, index) => (
        <div key={index} className="preview-item">
          <h3>{cert.name}</h3>
          <strong>{cert.issuer}</strong>
          <p>{cert.year}</p>
        </div>
      ))}
    </>
  );
}