import ScoreCard from "./ScoreCard";
import "./ResumeAnalysisCard.css";

export default function ResumeAnalysisCard({ analysis }) {
  if (!analysis) return null;

  const { score, strengths, weaknesses, suggestions } = analysis;

  const getScoreColor = () => {
    if (score >= 80) return "#16a34a";

    if (score >= 60) return "#f59e0b";

    return "#dc2626";
  };

  const getScoreLabel = () => {
    if (score >= 80) return "Excellent";

    if (score >= 60) return "Good";

    return "Needs Improvement";
  };

  return (
    <div className="resume-analysis-card">
      <h2>Resume Analysis</h2>

      <div className="score-section">
        <div
          className="score-circle"
          style={{
            background: getScoreColor(),
          }}
        >
          {score}
        </div>

        <h3>Resume Score</h3>

        <ScoreCard title="Resume Score" score={analysis.score} />

        <div className="score-label" style={{ color: getScoreColor() }}>
          {getScoreLabel()}
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${score}%`, background: getScoreColor() }}
          />
        </div>
      </div>

      <section>
        <h4>Strengths</h4>

        <ul>
          {strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Weaknesses</h4>

        <ul>
          {weaknesses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Suggestions</h4>

        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
