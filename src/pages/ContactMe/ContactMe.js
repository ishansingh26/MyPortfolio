import {
  FaLocationDot,
  FaSquareEnvelope,
  FaSquarePhone,
} from "react-icons/fa6";
import "./ContactMe.css";

export default function ContactMe() {
  const contactsList = [
    {
      id: "1",
      icon: <FaSquarePhone className="contact-react-icons" />,
      label: "Phone",
      information: [
        {
          id: "1.1",
          data: "91-7303976848",
          link: "tel:+917303976848",
          primaryClass: "contact-label-text",
        },
        { id: "1.2", data: "91-7007893649", link: "tel:+917303976848" },
      ],
    },
    {
      id: "2",
      icon: <FaSquareEnvelope className="contact-react-icons" />,
      label: "Email",
      information: [
        {
          id: "2.1",
          data: "ishansingh2696@gmail.com",
          link: "mailto:+ishansingh2696@gmail.com",
          primaryClass: "contact-label-text",
        },
        {
          id: "2.2",
          data: "ishansingh23111@gmail.com",
          link: "mailto:ishansingh23111@gmail.com",
        },
      ],
    },
    {
      id: "3",
      icon: <FaLocationDot className="contact-react-icons" />,
      label: "Location",
      information: [{ id: "3.1", data: "New Delhi" }],
    },
  ];
  return (
    <section className="page-main-container contact">
      <h1 className="page-heading m-0">Contact Details</h1>
      <div className="page-content-container">
        {contactsList &&
          contactsList?.map((ele) => (
            <div
              key={ele.id}
              className="align-items-center contact-card-container d-inline"
            >
              <div className="d-flex align-items-center w-100">
                {ele.icon}
                <div className="contact-details-container padding-left">
                  <label className="d-block contact-label-text">
                    {ele.label}
                  </label>
                  <div className="d-flex flex-column">
                    {ele.information.map((val) => (
                      <a
                        key={val.id}
                        href={val.link}
                        className={`contact-link ${val.primaryClass}`}
                      >
                        {val.data}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="contact-note text-center">
          Please click on the Contact Details to connect easily.
        </div>
      </div>
    </section>
  );
}
