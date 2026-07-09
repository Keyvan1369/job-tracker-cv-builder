import "./AIBadge.css";

export default function AIBadge({ analysis }) {

    if (!analysis) return null;

    const getColor = () => {

        if (analysis.score >= 80) return "#16a34a";

        if (analysis.score >= 60) return "#f59e0b";

        return "#dc2626";

    };

    const getLabel = () => {

        if (analysis.score >= 80) return "Excellent";

        if (analysis.score >= 60) return "Good";

        return "Needs Improvement";

    };

    return (

        <div
            className="ai-badge"
            style={{
                borderLeft:`6px solid ${getColor()}`
            }}
        >

            <div className="ai-header">

                <span
                    className="ai-score"
                    style={{
                        color:getColor()
                    }}
                >
                    {analysis.score}/100
                </span>

                <span
                    className="ai-status"
                    style={{
                        color:getColor()
                    }}
                >
                    {getLabel()}
                </span>

            </div>

            <div className="ai-message">

                💡 {analysis.suggestion}

            </div>

        </div>

    );

}