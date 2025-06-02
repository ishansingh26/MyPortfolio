import TCS_Logo from "../../assets/images/TCS.png";
import APPVENTUREZ_Logo from "../../assets/images/Appventurez.png";
import "./ProfessionalExprience.css";

export default function ProfessionalExprience() {
  const professionalWorkList = [
    {
      id: "1",
      company: { logo: TCS_Logo, logoStyle: "company-logo", name: "TCS" },
      profile: "System Engineer",
      duration: "Apr 2021 - Present",
      experience: [
        { id: "1.1", information: "Migrating the .net application to React." },
        {
          id: "1.2",
          information:
            "Designed the Micro frontend architecture for the application.",
        },
        {
          id: "1.3",
          information:
            "Designed the complete framework, design system, API flows for the React application from scratch.",
        },
        {
          id: "1.4",
          information:
            "Collaborated with the product managers to understand the client requirements.",
        },
        {
          id: "1.5",
          information:
            "Mentored 3 junior developers, providing regular feedbacks, technical guidance, and growth plans.",
        },
      ],
    },
    {
      id: "2",
      company: {
        logo: APPVENTUREZ_Logo,
        logoStyle: "company-logo",
        name: "Appventurez",
      },
      profile: "Software Developer",
      duration: "May 2021 - Feb 2023",
      experience: [
        {
          id: "2.1",
          information:
            "Developed a new, cross-browser compatible user interactive application using Angular from scratch.",
        },
        {
          id: "2.2",
          information:
            "Collaborated with the product managers to understand the customer requirements.",
        },
        {
          id: "2.3",
          information:
            "Daily maintenance of code, debugging issues and solving client's problems.",
        },
        {
          id: "2.4",
          information:
            "Improved the application performance by 15% by implementing code optimization technique.",
        },
        {
          id: "2.5",
          information:
            "Increased the user engagement by 30% by implementing the mobile first design approach. ",
        },
        {
          id: "2.6",
          information:
            "Mentored 3 interns by providing guidance on software development best practices and assisting them in completing their tasks.",
        },
      ],
    },
  ];
  return (
    <section className="page-main-container">
      <h1 className="page-heading m-0">Professional Experience</h1>
      <div className="page-content-container">
        <div className="d-flex grid-container">
          {professionalWorkList &&
            professionalWorkList?.map(
              ({ id, company, profile, duration, experience }) => (
                <div key={id} className="prof-exp-flex-box">
                  <div className="text-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      width={company.width}
                      height={company.height}
                      className={company.logoStyle}
                    />
                  </div>
                  <div>
                    <h2 className="m-0">{profile}</h2>
                    <p className="m-0">
                      <i>{duration}</i>
                    </p>
                    <ul className="m-0">
                      {experience?.map((data) => (
                        <li key={data.id}>{data.information}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
}
