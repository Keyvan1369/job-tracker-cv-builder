export default function Header({
  fullName,
  jobTitle,
  email,
  phone,
  location,
  GitHub,
  LinkedIn,
  Portfolio
}) {
  return (
    <div className="cv-header">
      <h1>{fullName || "Your Name"}</h1>

      <p>
        {email}
        {email && phone && " | "}
        {phone}
      </p>

      <p>{location}</p>
      <p>{GitHub}</p>
      <p>{LinkedIn}</p>
      <p>{Portfolio}</p>
    </div>
  );
}