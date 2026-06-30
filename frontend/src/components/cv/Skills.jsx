export default function Skills({
    data
}) {

    if(!data.skills) return null;

    return (

        <>

            <h2>Skills</h2>

            <div className="skills-preview">

                {data.skills

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