import ModernTemplate from "./ModernTemplate.jsx";
import MinimalTemplate from "./MinimalTemplate.jsx";
import ProfessionalTemplate from "./ProfessionalTemplate.jsx";
import CreativeTemplate from "./CreativeTemplate.jsx";

export default function TemplateRenderer({
    template,
    data
}) {

    switch(template){

        case "minimal":
            return <MinimalTemplate data={data}/>;

        case "professional":
            return <ProfessionalTemplate data={data}/>;

        case "creative":
            return <CreativeTemplate data={data}/>;

        default:
            return <ModernTemplate data={data}/>;

    }

}