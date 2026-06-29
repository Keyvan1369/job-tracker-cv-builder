export default function Summary({ cvData }) {

    if(!cvData.summary) return null;

    return (

        <>

            <h2>Summary</h2>

            <p>{cvData.summary}</p>

        </>

    );

}