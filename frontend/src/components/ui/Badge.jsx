import "./Badge.css";

export default function Badge({
  children,
  icon,
  color = "primary",
}) {
  return (
    <span className={`badge badge-${color}`}>
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}

      {children}
    </span>
  );
}