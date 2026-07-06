import "../../styles/template/TemplateCard.css";

export default function TemplateCard({
  title,
  image,
  active = false,
  badge = "",
  onClick,
}) {
  return (
    <div
      className={`template-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="template-image">
        <img src={image} alt={title} />
      </div>

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