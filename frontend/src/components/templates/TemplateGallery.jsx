import TemplateCard from "./TemplateCard.jsx";

export default function TemplateGallery({
  template,
  setTemplate,
}) {
  const templates = [
    {
      id: "modern",
      name: "Modern",
      preview: "/templates/modern.png",
    },
    {
      id: "developer",
      name: "Developer Neon",
      preview: "/templates/dev.png",
      badge: "NEW",
    },
    {
      id: "professional",
      name: "Professional",
      preview: "/templates/pro.png",
    },
    {
      id: "creative",
      name: "Creative",
      preview: "/templates/creative.png",
    },
    {
      id: "executive",
      name: "Executive",
      preview: "/templates/executive.png",
    },
  ];

  return (
    <div className="template-grid">
      {templates.map((t) => (
        <TemplateCard
          key={t.id}
          name={t.name}
          preview={t.preview}
          badge={t.badge}
          isActive={template === t.id}
          onClick={() => setTemplate(t.id)}
        />
      ))}
    </div>
  );
}