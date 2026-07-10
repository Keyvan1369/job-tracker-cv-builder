import AIBadge from "../ai/AIBadge.jsx";
import ModernTemplate from "./ModernTemplate.jsx";
import MinimalTemplate from "./MinimalTemplate.jsx";
import ProfessionalTemplate from "./ProfessionalTemplate.jsx";
import CreativeTemplate from "./CreativeTemplate.jsx";
import ExecutiveTemplate from "./ExecutiveTemplate.jsx";
import SpectrumPulseTemplate from "./SpectrumPulseTemplate.jsx";
import DeveloperTemplate from "./DeveloperTemplate.jsx";

export default function TemplateRenderer({
    template,
    data,
    analysis
}) {

    switch(template){

        case "minimal":
            return <MinimalTemplate data={data} analysis={analysis}/>;

        case "professional":
            return <ProfessionalTemplate data={data} analysis={analysis}/>;

        case "creative":
            return <CreativeTemplate data={data} analysis={analysis}/>;
        case "executive":
            return <ExecutiveTemplate data={data} analysis={analysis}/>;

        case "SpectrumPulse":
            return <SpectrumPulseTemplate data={data} analysis={analysis}/>;

        case "developer":
            return <DeveloperTemplate data={data} analysis={analysis}/>;

        default:
            return <ModernTemplate data={data} analysis={analysis}/>;



    }

}