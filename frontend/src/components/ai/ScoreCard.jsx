import "./ScoreCard.css";

export default function ScoreCard({

    title,

    score

}) {

    const getColor = () => {

        if (score >= 85) return "#22c55e";

        if (score >= 70) return "#f59e0b";

        return "#ef4444";

    };

    const getLabel = () => {

        if (score >= 85) return "Excellent Match";

        if (score >= 70) return "Good Match";

        return "Needs Improvement";

    };

    return (

        <div className="score-card">

            <h2>

                {title}

            </h2>

            <div className="score-number">

                {score}%

            </div>

            <div className="progress">

                <div

                    className="progress-fill"

                    style={{

                        width: `${score}%`,

                        background:getColor()

                    }}

                />

            </div>

            <p

                className="score-status"

                style={{

                    color:getColor()

                }}

            >

                {getLabel()}

            </p>

        </div>

    );

}