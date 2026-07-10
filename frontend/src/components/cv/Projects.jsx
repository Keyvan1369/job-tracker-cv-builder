import AIBadge from "../ai/AIBadge.jsx";

export default function Projects({
    data,
    analysis
}) {

    if(!data.projects?.length)
        return null;

    return (

        <>

            <h2>Projects</h2>
            <AIBadge analysis={analysis}/>
            {data.projects.map((proj,index)=>(

                <div
                    key={index}
                    className="preview-item"
                >

                    <h3>{proj.name}</h3>

                    <p>{proj.technologies}</p>

                    <p>{proj.github}</p>

                    <p>{proj.demo}</p>

                    <p>{proj.description}</p>

                </div>

            ))}

        </>

    );

}