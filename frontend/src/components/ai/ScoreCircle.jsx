import "./ScoreCircle.css";

export default function ScoreCircle({ score = 0, label = "Score" }) {

    const percentage = Math.max(0, Math.min(score, 100));

    return (

        <div className="score-circle-container">

            <div
                className="score-circle"
                style={{
                    background: `conic-gradient(
                        #4f46e5 ${percentage * 3.6}deg,
                        #e5e7eb 0deg
                    )`
                }}
            >

                <div className="score-circle-inner">

                    <span className="score-number">

                        {percentage}

                    </span>

                    <span className="score-percent">

                        %

                    </span>

                </div>

            </div>

            <p className="score-label">

                {label}

            </p>

        </div>

    );

}