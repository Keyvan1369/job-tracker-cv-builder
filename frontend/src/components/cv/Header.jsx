export default function Header({
  fullName,
  email,
  phone,
  location,
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
    </div>
  );
}