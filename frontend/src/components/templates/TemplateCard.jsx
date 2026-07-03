import "../../styles/template/TemplateCard.css";

export default function TemplateCard({
  name,
  preview,
  isActive,
  onClick,
  badge,
}) {
  return (
    <div
      className={`template-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="template-preview">
        <img src={preview} alt={name} />
      </div>

      <div className="template-info">
        <h3>{name}</h3>

        {badge && <span className="template-badge">{badge}</span>}
      </div>
    </div>
  );
}