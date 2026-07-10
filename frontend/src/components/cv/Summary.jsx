import AIBadge from "../ai/AIBadge.jsx";
export default function Summary({ data,analysis, onImprove,

    loading }) {

    if(!data.summary) return null;

    return (

        <>

            <h2>Summary</h2>

            <AIBadge analysis={analysis} onImprove={onImprove} loading={loading}/>

            <p>{data.summary}</p>

        </>

    );

}