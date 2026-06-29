import ModernTemplate from "./Modern/ModernTemplate";
import MinimalTemplate from "./Minimal/MinimalTemplate";
import ProfessionalTemplate from "./Professional/ProfessionalTemplate";
import CreativeTemplate from "./Creative/CreativeTemplate";

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