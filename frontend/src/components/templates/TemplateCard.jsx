import "../../styles/template/TemplateCard.css";
import TemplatePreview from "./TemplatePreview";

export default function TemplateCard({
  title,
  template,
  data,
  active = false,
  badge = "",
  onClick,
}) {
  return (
    <div
      className={`template-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <TemplatePreview
        template={template}
        data={data}
      />

      <div className="template-footer">
        <h3>{title}</h3>

        {badge && (
          <span className="template-badge">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}