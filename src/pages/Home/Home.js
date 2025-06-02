import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navigateTo } from "../../config/route";
import { homeIcons, labels } from "../../config/constants";
import "./Home.css";

export default function Home() {
  const { myName } = labels;
  const [showSocialIcon, setShowSocialIcon] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSocialIcon(true), 500);
  }, []);

  // const arr = [
  //   { name: "Ishan", age: 29 },
  //   { name: "Shreya", age: 32 },
  //   { name: "Kaashvi", age: 0.1 },
  //   { name: "Anita", age: 59 },
  // ];

  // let output = arr.reduce((acc, current) => {
  //   if (current.age > 29) {
  //     acc.push(current.name);
  //   }
  //   return acc.sort();
  // }, []);

  // console.log("output", output);

  return (
    <section className="home">
      <div className="intoduction w-100 text-center">
        <h1 className="main-heading m-0">HEY, I'M {myName}</h1>
        <h2>Frontend Developer</h2>
        <p className="content mx-auto">
          I architect and implement scalable, maintainable frontend solutions
          with a focus on performance, accessibility, and long-term code
          quality.
        </p>
        <div className="learn-about-me">
          <Link to={navigateTo.page} className="link">
            {navigateTo.label}
          </Link>
        </div>
      </div>
      <div className="d-flex home-icons-container">
        {showSocialIcon
          ? homeIcons.map(({ id, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="home-icon-links"
              >
                {icon}
              </a>
            ))
          : ""}
      </div>

      {/* <div className="learn-about-me">
        <Link to={navigateTo.page} className="link">
          {navigateTo.label}
        </Link>
      </div> */}
    </section>
  );
}
