import React from "react";
import "./Project.css";
import FullStackProject from "../../assets/FullStackProject.png";
import CypressJsTesting from "../../assets/CypressJSTesting.png";
import SpringBootProject from "../../assets/SpringBootProject.png";

const Project = () => {
  const handleProjectClick = (url) => {
    window.location.href = url;
  };

  return (
    <section id="projects" className="project">
      <span className="title">My Work</span>
      <span className="description">
        Here Iam Providing All My Project Work Details, You Can Check It Right
        Now :)
      </span>
      <div className="myProjects">
        <div className="projectContent">
          <img src={FullStackProject} alt="project" className="projectImg" />
          <span className="projectTitle">
            Secure User Authentication and Profile Management System
          </span>
          <span className="projectBio">
            The "Secure User Authentication and Profile Management System" is a
            robust full-stack web application designed to provide a secure and
            user-friendly experience for account management. This application
            encompasses essential features including user registration, login
            authentication, and a personalized profile page.
          </span>
          <button
            type="button"
            className="projectBtn"
            onClick={() =>
              handleProjectClick(
                "https://github.com/ViswaTeja264/FullStackProject"
              )
            }
          >
            GitHub
          </button>
        </div>
        <div className="projectContent">
          <img src={CypressJsTesting} alt="project" className="projectImg" />
          <span className="projectTitle">
            Cypress Testing Suite for Comprehensive UI and API Validation
          </span>
          <span className="projectBio">
            The "Cypress Testing Suite" is a unified project encompassing three
            distinct modules focused on ensuring the robustness of web
            applications. This comprehensive testing suite utilizes Cypress for
            both UI and API testing, provides seamless and consolidated approach
            to quality assurance.
          </span>
          <button
            type="button"
            className="projectBtn"
            onClick={() =>
              handleProjectClick(
                "https://github.com/ViswaTeja264/Javascript-Automation"
              )
            }
          >
            GitHub
          </button>
        </div>
        <div className="projectContent">
          <img src={SpringBootProject} alt="project" className="projectImg" />
          <span className="projectTitle">
            SpringBoot CRUD Application with Robust Testing Suite
          </span>
          <span className="projectBio">
            The "SpringBoot CRUD Application" is a Java-based project built
            using SpringBoot framework, incorporating controller, services
            classes and JPA repositories for seamless data flow. The project is
            fortified with Java Mockito tests to ensure the functionality of its
            components.
          </span>
          <button
            type="button"
            className="projectBtn"
            onClick={() =>
              handleProjectClick(
                "https://github.com/ViswaTeja264/SpringBootMicroServicesProject"
              )
            }
          >
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
