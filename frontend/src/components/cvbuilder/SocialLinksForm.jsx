export default function SocialLinksForm({
  cvData,
  handleChange,
}) {
  return (
    <>
      

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
        placeholder="Portfolio Website"
        value={cvData.portfolio}
        onChange={handleChange}
      />
    </>
  );
}