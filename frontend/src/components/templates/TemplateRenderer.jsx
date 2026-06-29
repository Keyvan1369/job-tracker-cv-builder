import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";

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