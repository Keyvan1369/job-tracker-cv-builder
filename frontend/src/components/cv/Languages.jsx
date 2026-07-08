export default function Languages({ data }) {
  if (!data.languages?.length) return null;

  return (
    <>
      {data.languages.map((lang, index) => (
        <div key={index} className="preview-item">
          <h3>{lang.language}</h3>
          <p>{lang.level}</p>
        </div>
      ))}
    </>
  );
}