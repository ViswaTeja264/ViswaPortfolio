import React, { useState } from "react";
import "./Contact.css";
import myResumePDF from "../../assets/ViswaTeja_Resume.pdf";

const Contact = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = myResumePDF;
    link.download = "ViswaTeja_Resume.pdf";
    link.click();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form data submitted successfully");
      } else {
        alert("Error submitting form:", response.statusText);
      }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contactContent">
        <span className="title">Contact Me</span>
        <div className="emailSection">
          <a href="mailto:viswateja209@gmail.com">
            <i className="fa-solid fa-paper-plane emailIcon"></i>
          </a>
          <span className="email">viswateja209@gmail.com</span>
        </div>
        <div className="phoneSection">
          <a href="tel:9381004884">
            <i className="fa-solid fa-phone phoneIcon"></i>
          </a>
          <span className="phone">9381004884</span>
        </div>
        <div className="allLogos">
          <a href="https://www.linkedin.com/in/viswateja264/">
            <i className="fa-brands fa-linkedin fa-xl socialLogo" />
          </a>
          <a href="https://github.com/ViswaTeja264">
            <i className="fa-brands fa-github fa-xl socialLogo" />
          </a>
          <a href="https://www.instagram.com/theviswavibes/">
            <i className="fa-brands fa-instagram fa-xl socialLogo" />
          </a>
          <a href="https://www.facebook.com/Viswateja209">
            <i className="fa-brands fa-facebook fa-xl socialLogo" />
          </a>
        </div>
        <button type="button" className="downloadcv" onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>
      <div className="myForm">
        <form className="form" onSubmit={handleFormData}>
          <input
            type="text"
            name="name"
            className="inputName"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            className="inputEmail"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
