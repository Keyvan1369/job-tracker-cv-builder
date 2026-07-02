import "./Section.css";

export default function Section({
  title,
  children,
}) {
  return (
    <section className="ui-section">

      <h2 className="ui-section-title">
        {title}
      </h2>

      <div className="ui-section-content">
        {children}
      </div>

    </section>
  );
}