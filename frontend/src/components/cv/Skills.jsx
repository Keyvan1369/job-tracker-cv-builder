export default function Skills({
    cvData
}) {

    if(!cvData.skills) return null;

    return (

        <>

            <h2>Skills</h2>

            <div className="skills-preview">

                {cvData.skills

                    .split(",")

                    .filter(Boolean)

                    .map((skill,index)=>(

                        <span
                            key={index}
                            className="skill-tag"
                        >

                            {skill.trim()}

                        </span>

                    ))}

            </div>

        </>

    );

}