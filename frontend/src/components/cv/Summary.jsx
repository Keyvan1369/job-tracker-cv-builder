export default function Summary({ data }) {

    if(!data.summary) return null;

    return (

        <>

            <h2>Summary</h2>

            <p>{data.summary}</p>

        </>

    );

}