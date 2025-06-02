import Calculator from "../../assets/images/calculator.png";
import "./Projects.css";

export default function Projects() {
  const projectsData = [
    {
      id: "1",
      img: Calculator,
      name: "Calculator",
      content:
        "Application created to solve all the arithmetic calculations. Implemented engaging UI to reflect the features of real world calculators.",
      tech: "JavaScript, HTML5, CSS3, Bootstrap",
      code: [
        {
          id: "1.1",
          linkText: "View Project",
          link: "https://ishansingh26.github.io/Calculator/",
        },
        {
          id: "1.2",
          linkText: "View Code",
          link: "https://github.com/ishansingh26/Calculator",
        },
      ],
    },
  ];

  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="page-main-container">
      <h1 className="page-heading m-0">Projects</h1>
      <div className="page-content-container">
        {projectsData &&
          projectsData?.map((data) => (
            <div className="d-flex project-container" key={data.id}>
              <img src={data.img} alt={data.name} className="project-img" />
              <div className="d-flex flex-column project-content-container">
                <div className="project-content">
                  <h2 className="project-name m-0">{data.name}</h2>
                  <div>{data?.content}</div>
                  <div>
                    Technologies Used -{" "}
                    <div>
                      <strong>{data.tech}</strong>
                    </div>
                  </div>
                </div>
                {data.code?.map(({ id, linkText, link }) => (
                  <button
                    key={id}
                    type="button"
                    href={link}
                    className="link w-100 project-btn cursor-pointer"
                    onClick={() => handleOpenLink(link)}
                  >
                    {linkText}
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
