import "./AboutMe.css";

export default function AboutMe() {
  // const { a, setA } = useOutletContext();
  const aboutMe = [
    {
      id: 1,
      information: `I'm a Frontend Developer with over 4 years of experience specializing
        in building scalable, performant, and maintainable web applications. My
        core strength lies in development — translating product requirements
        into clean, modular, and production-ready code.`,
    },
    {
      id: 2,
      information: `I work primarily with modern JavaScript technologies like React,
        Angular, focusing on application logic, architecture, and seamless
        integration with backend services. While I appreciate good design, my
        expertise is rooted in engineering and performance.`,
    },
    {
      id: 3,
      information: `Throughout my career, I’ve built everything from responsive landing
        pages to production-ready client applications with complex state
        management and API integrations. I emphasize code quality,
        accessibility, and long-term maintainability in every project.`,
    },
  ];

  const mySkills = [
    { id: 1, list: `React.js` },
    { id: 2, list: `Redux` },
    { id: 3, list: `Angular` },
    { id: 4, list: `JavaScript (ES6+)` },
    { id: 5, list: `TypeScript` },
    { id: 6, list: `HTML5` },
    { id: 7, list: `CSS3` },
    { id: 8, list: `Bootstrap` },
    { id: 9, list: `REST APIs` },
    { id: 10, list: `Axios` },
    { id: 11, list: `Git` },
    { id: 12, list: `GitHub` },
    { id: 13, list: `CLI tools` },
    { id: 14, list: `VS Code` },
  ];

  // const handleChange = (e) => {
  //   setA(e.target.value);
  // };
  // console.log("aaaaa", a);

  return (
    <section className="page-main-container">
      <h1 className="page-heading m-0">About Me</h1>
      <div className="page-content-container">
        {aboutMe &&
          aboutMe?.map(({ id, information }) => (
            <p key={id} className="m-0 about-me-content">
              {information}
            </p>
          ))}

        <div className="text-center">
          <a
            href="Ishan_Singh_Resume.pdf"
            download="Ishan_Singh-Resume.pdf"
            className="link"
          >
            Download Resume
          </a>
        </div>

        {/* <p>
        I continuously explore new tools and techniques to stay ahead in the
        fast-evolving frontend landscape — whether it’s optimizing bundle sizes,
        refining state management, or adopting new patterns in React.
      </p> */}
        {/* <select onChange={handleChange} value={a}>
          {mySkills &&
            mySkills?.map(({ id, list }) => (
              <option key={id} value={list} className="skill-list">
                {list}
              </option>
            ))}
        </select> */}

        <h2>My Skills</h2>
        {/* <div className="d-flex"> */}
        <div className="d-flex skill-list-container">
          {mySkills &&
            mySkills?.map(({ id, list }) => (
              <div key={id} className="skill-list">
                {list}
              </div>
            ))}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
