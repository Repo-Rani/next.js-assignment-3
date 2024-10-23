import React from "react";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <h5>Contact Me</h5>
        <div className="contact-content">
          <div className="" style={{ flex: 1 }}>
            <ContactInfoCard
              iconUrl="/gmail.png"
              text="ranimiss968@gamil.com"
            />
            <ContactInfoCard
              iconUrl="/github.png"
              text="https://github.com/Repo-Rani"
            />
          </div>
          <div className="" style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );           
};

export default Contact;