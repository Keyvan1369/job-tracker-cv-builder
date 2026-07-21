import "./ScoreCircle.css";

export default function ScoreCircle({ score = 0, label = "Score" }) {
  const percentage = Math.max(0, Math.min(score, 100));
  const getColor = () => {
    if (score >= 85) return "#16a34a";

    if (score >= 70) return "#f59e0b";

    return "#ef4444";
  };

  return (
    <div className="score-circle-container">
      <div
        className="score-circle"
        style={{
          background: `conic-gradient(
             ${getColor()} ${percentage * 3.6}deg,
                 #e5e7eb 0deg
            )`,
        }}
      >
        <span
          className="score-number"
          style={{
            color: getColor(),
          }}
        >
          {percentage}
        </span>
      </div>

      <p className="score-label">{label}</p>
    </div>
  );
}
