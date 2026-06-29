export default function Header({ cvData }) {
  return (
    <div className="cv-header">
      <h1>{cvData.fullName || "Your Name"}</h1>

      <p>
        {cvData.email}

        {cvData.email && cvData.phone && " | "}

        {cvData.phone}
      </p>

      <p>{cvData.location}</p>
    </div>
  );
}