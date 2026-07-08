import TemplateRenderer from "./TemplateRenderer.jsx";
import "../../styles/template/TemplatePreview.css";

export default function TemplatePreview({
  template,
  data,
}) {
  return (
    <div className="template-preview-mini">
      <div className="preview-scale">
        <TemplateRenderer
          template={template}
          data={data}
        />
      </div>
    </div>
  );
}