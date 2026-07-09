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

                <div className="score-circle">

                    {score}

                </div>

                <h3>Resume Score</h3>

            </div>

            <section>

                <h4>Strengths</h4>

                <ul>

                    {strengths.map((item, index) => (

                        <li key={index}>
                            {item}
                        </li>

                    ))}

                </ul>

            </section>

            <section>

                <h4>Weaknesses</h4>

                <ul>

                    {weaknesses.map((item, index) => (

                        <li key={index}>
                            {item}
                        </li>

                    ))}

                </ul>

            </section>

            <section>

                <h4>Suggestions</h4>

                <ul>

                    {suggestions.map((item, index) => (

                        <li key={index}>
                            {item}
                        </li>

                    ))}

                </ul>

            </section>

        </div>

    );

}