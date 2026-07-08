import TemplateGallery from "../templates/TemplateGallery.jsx";
import TemplateRenderer from "../templates/TemplateRenderer.jsx";

export default function PreviewPanel({
  template,
  setTemplate,
  cvData,
}) {
  return (
    <div className="preview-panel">

      <TemplateGallery
        template={template}
        onTemplateChange={setTemplate}
      />

      <div className="cv-preview">

        <TemplateRenderer
          template={template}
          data={cvData}
        />

      </div>

    </div>
  );
}