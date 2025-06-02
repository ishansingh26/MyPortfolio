import { homeIcons, labels } from "../../config/constants";
import "./Footer.css";

export default function Footer() {
  const { myName } = labels;

  return (
    <section className="footer">
      <div className="d-flex justify-content-between footer-container mx-auto">
        <div className="footer-flex-items">
          <h2 className="social-text">ISHAN SINGH</h2>
          <p className="footer-para w-100">
            Frontend Web Developer specializing in building fast, scalable, and
            maintainable web applications that drive product success.
          </p>
        </div>
        <div className="footer-flex-items">
          <h2 className="social-text">SOCIAL</h2>
          <div className="d-flex gap-1">
            {homeIcons.map(({ id, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-links d-inline-block"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="footer-copy-right-content mx-auto">
        © Copyright 2025 . Made by {myName}
      </p>
    </section>
  );
}
