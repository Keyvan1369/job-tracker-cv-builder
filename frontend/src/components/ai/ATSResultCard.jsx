import ScoreCircle from "./ScoreCircle";
import "./ATSResultCard.css";

export default function ATSResultCard({ result }) {

    if (!result) return null;

    return (

        <div className="ats-card">

            <ScoreCircle

                score={result.matchScore}

                label="ATS Match"

            />

            <div className="ats-section">

                <h3>✅ Strengths</h3>

                <ul>

                    {result.strengths?.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))}

                </ul>

            </div>

            <div className="ats-section">

                <h3>❌ Missing Skills</h3>

                <ul>

                    {result.missingSkills?.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))}

                </ul>

            </div>

            <div className="ats-section">

                <h3>🔍 Missing Keywords</h3>

                <ul>

                    {result.missingKeywords?.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))}

                </ul>

            </div>

            <div className="ats-section">

                <h3>💡 Suggestions</h3>

                <ul>

                    {result.suggestions?.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}