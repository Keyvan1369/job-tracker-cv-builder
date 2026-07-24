import "./CoverLetterCard.css";

export default function CoverLetterCard({

    text,

    onCopy,

    onRegenerate

}) {

    if (!text) return null;

    return (

        <div className="cover-card">

            <div className="cover-header">

                <h2>Cover Letter</h2>

                <div className="cover-actions">

                    <button onClick={onCopy}>

                        Copy

                    </button>

                    <button onClick={onRegenerate}>

                        Regenerate

                    </button>

                </div>

            </div>

            <div className="cover-content">

                {text}

            </div>

        </div>

    );

}