import ModernTemplate from "./ModernTemplate.jsx";
import MinimalTemplate from "./MinimalTemplate.jsx";
import ProfessionalTemplate from "./ProfessionalTemplate.jsx";
import CreativeTemplate from "./CreativeTemplate.jsx";
import ExecutiveTemplate from "./ExecutiveTemplate.jsx";
import SpectrumPulseTemplate from "./SpectrumPulseTemplate.jsx";
import DeveloperTemplate from "./DeveloperTemplate";

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
        case "executive":
            return <ExecutiveTemplate data={data} />;

        case "SpectrumPulse":
            return <SpectrumPulseTemplate data={data} />;

        case "developer":
            return <DeveloperTemplate data={data} />;

        default:
            return <ModernTemplate data={data}/>;



    }

}