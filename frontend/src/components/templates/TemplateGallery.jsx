import "../../styles/template/TemplateGallery.css";
import TemplateCard from "./TemplateCard.jsx";

export default function TemplateGallery({
  template,
  onTemplateChange,
  data,
}) {
  const templates = [
    {
      id: "modern",
      name: "Modern",
    },
    {
      id: "developer",
      name: "Developer",
      badge: "NEW",
    },
    {
      id: "professional",
      name: "Professional",
    },
    {
      id: "creative",
      name: "Creative",
    },
    {
      id: "executive",
      name: "Executive",
    },
  ];

  return (
    <div className="template-grid">
      {templates.map((t) => (
        <TemplateCard
          key={t.id}
          title={t.name}
          template={t.id}
          data={data}
          badge={t.badge}
          active={template === t.id}
          onClick={() => onTemplateChange(t.id)}
        />
      ))}
    </div>
  );
}