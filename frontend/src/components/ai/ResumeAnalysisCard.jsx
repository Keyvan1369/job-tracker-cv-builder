import "./ResumeAnalysisCard.css";

export default function ResumeAnalysisCard({ analysis }) {

    if (!analysis) return null;

    const { score, strengths, weaknesses, suggestions } = analysis;

    return (

        <div className="resume-analysis-card">

            <h2>AI Resume Analysis</h2>

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