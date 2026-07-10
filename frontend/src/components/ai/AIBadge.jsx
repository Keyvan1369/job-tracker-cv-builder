import "./AIBadge.css";

export default function AIBadge({ analysis, onImprove,
    loading}) {

    if (!analysis) return null;

    const score = analysis.score ?? 0;

    const getStatus = () => {

        if (score >= 80)
            return {
                color: "#22c55e",
                label: "Excellent"
            };

        if (score >= 60)
            return {
                color: "#f59e0b",
                label: "Good"
            };

        return {
            color: "#ef4444",
            label: "Needs Improvement"
        };

    };

    const status = getStatus();

    return (

        <div className="ai-badge">

            <div className="ai-top">

                <span
                    className="ai-status"
                    style={{
                        color: status.color
                    }}
                >
                    {status.label}
                </span>

                <span
                    className="ai-score"
                >
                    {score}/100
                </span>

            </div>

            <div className="ai-progress">

                <div
                    className="ai-progress-fill"
                    style={{
                        width: `${score}%`,
                        background: status.color
                    }}
                />

            </div>

            <p className="ai-message">

                 {analysis.suggestion}

            </p>
            <button
                 className="ai-improve-btn"
                onClick={onImprove}
                disabled={loading}>

                {
                    loading
                        ? "Improving..."
                        : " Improved"
                }

            </button>

        </div>

    );

}