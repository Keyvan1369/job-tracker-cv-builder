export default function Education({
    data
}) {

    if(!data.educations?.length)
        return null;

    return (

        <>

            <h2>Education</h2>

            {data.educations.map((edu,index)=>(

                <div
                    key={index}
                    className="preview-item"
                >

                    <h3>{edu.degree}</h3>

                    <strong>{edu.school}</strong>

                    <p>{edu.year}</p>

                </div>

            ))}

        </>

    );

}