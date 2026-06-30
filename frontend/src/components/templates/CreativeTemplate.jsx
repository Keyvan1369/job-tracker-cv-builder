import "../../styles/template/CreativeTemplate.css"

export default function CreativeTemplate({
  data,
}) {
  return (
    <div className="creative-template">

      <div className="sidebar">

        <h2>
          Contact
        </h2>

        <p>{data.email}</p>

        <p>{data.phone}</p>

      </div>

      <div className="content">

        <h1>
          {data.fullName}
        </h1>

        <p>
          {data.summary}
        </p>

      </div>

    </div>
  );
}