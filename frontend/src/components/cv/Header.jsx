export default function Header({ data }) {
  if (!data) return null;

  return (
    <div className="cv-header">
      <h1>{data.fullName || "Your Name"}</h1>
      {data.jobTitle && <h2>{data.jobTitle}</h2>}

      <p>
        {data.email}
        {data.email && data.phone && " | "}
        {data.phone}
      </p>

      {data.location && <p>{data.location}</p>}

      <div className="header-socials">
        {data.github && <p>GitHub: {data.github}</p>}
        {data.linkedin && <p>LinkedIn: {data.linkedin}</p>}
        {data.portfolio && <p>Portfolio: {data.portfolio}</p>}
      </div>
    </div>
  );
}