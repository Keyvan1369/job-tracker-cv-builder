export default function PersonalInfoForm({
  cvData,
  handleChange,
}) {
  return (
    <>
      <input
        name="fullName"
        placeholder="Full Name"
        value={cvData.fullName}
        onChange={handleChange}
      />

      <input
        name="jobTitle"
        placeholder="Job Title"
        value={cvData.jobTitle}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={cvData.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={cvData.phone}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={cvData.location}
        onChange={handleChange}
      />

      <input
        name="github"
        placeholder="GitHub"
        value={cvData.github}
        onChange={handleChange}
      />

      <input
        name="linkedin"
        placeholder="LinkedIn"
        value={cvData.linkedin}
        onChange={handleChange}
      />

      <input
        name="portfolio"
        placeholder="Portfolio"
        value={cvData.portfolio}
        onChange={handleChange}
      />
    </>
  );
}