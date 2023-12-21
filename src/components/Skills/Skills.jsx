import React from "react";
import "./Skills.css";
import html from "../../assets/HTML.png";
import css from "../../assets/CSS.png";
import js from "../../assets/JS.png";
import react from "../../assets/React.png";
import nodejs from "../../assets/NodeJS.png";
import mongodb from "../../assets/MongoDB.png";
import java from "../../assets/Java.png";
import php from "../../assets/PHP.png";
import selenium from "../../assets/Selenium.png";
import cypress from "../../assets/Cypress.png";
import playwright from "../../assets/Playwright.png";
import jest from "../../assets/Jest.png";

const Skills = () => {
  const handleSkillClick = (url) => {
    window.location.href = url;
  };

  return (
    <section id="skills" className="skills">
      <span className="title">What I do</span>
      <span className="description">
        Dedicated full-stack developer proficient in crafting dynamic web
        applications, combining strong front-end design skills with robust
        back-end programming to deliver user-centric and efficient solutions.
      </span>

      <div className="myskills">
        <span className="skillsTitle">FrontEnd Skills</span>
        <div className="frontendSkills">
          <div
            className="skill"
            onClick={() =>
              handleSkillClick("https://html.spec.whatwg.org/multipage/")
            }
          >
            <img src={html} alt="HTML" className="skillImg" />
            <span className="skillName">HTML</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://www.w3.org/Style/CSS/")}
          >
            <img src={css} alt="CSS" className="skillImg" />
            <span className="skillName">CSS</span>
          </div>
          <div
            className="skill"
            onClick={() =>
              handleSkillClick(
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              )
            }
          >
            <img src={js} alt="JavaScript" className="skillImg" />
            <span className="skillName">JavaScript</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://react.dev/")}
          >
            <img src={react} alt="React" className="skillImg" />
            <span className="skillName">React</span>
          </div>
        </div>

        <span className="skillsTitle">BackEnd Skills</span>
        <div className="backendSkills">
          <div
            className="skill"
            onClick={() => handleSkillClick("https://nodejs.org/en")}
          >
            <img src={nodejs} alt="NodeJS" className="skillImg" />
            <span className="skillName">NodeJS</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://www.mongodb.com/")}
          >
            <img src={mongodb} alt="MongoDB" className="skillImg" />
            <span className="skillName">MongoDB</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://www.java.com/en/")}
          >
            <img src={java} alt="Java" className="skillImg" />
            <span className="skillName">Java</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://www.php.net/")}
          >
            <img src={php} alt="PHP" className="skillImg" />
            <span className="skillName">PHP</span>
          </div>
        </div>

        <span className="skillsTitle">Testing Skills</span>
        <div className="testingSkills">
          <div
            className="skill"
            onClick={() => handleSkillClick("https://www.selenium.dev/")}
          >
            <img src={selenium} alt="Selenium" className="skillImg" />
            <span className="skillName">Selenium</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://www.cypress.io/")}
          >
            <img src={cypress} alt="Cypress" className="skillImg" />
            <span className="skillName">Cypress</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://playwright.dev/")}
          >
            <img src={playwright} alt="PlayWright" className="skillImg" />
            <span className="skillName">PlayWright</span>
          </div>
          <div
            className="skill"
            onClick={() => handleSkillClick("https://jestjs.io/")}
          >
            <img src={jest} alt="Jest" className="skillImg" />
            <span className="skillName">Jest</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
