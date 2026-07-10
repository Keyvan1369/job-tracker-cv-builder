import AIBadge from "../ai/AIBadge.jsx";
export default function Summary({ data,analysis }) {

    if(!data.summary) return null;

    return (

        <>

            <h2>Summary</h2>

            <AIBadge analysis={analysis}/>

            <p>{data.summary}</p>

        </>

    );

}