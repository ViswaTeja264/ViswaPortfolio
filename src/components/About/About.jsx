import React from "react";
import "./About.css";
import mine from "../../assets/Mine.png";

const About = () => {
  return (
    <section id="about" className="about">
      <img src={mine} alt="Mine" className="mySelf" />
      <div className="aboutContent">
        <span className="title">About Me</span>
        <span className="description">
          Hi! I'm Viswa Teja, A 23 Year Old B-Tech Graduate, Currently Working
          In GUVI Geek Network Private Limited In Chennai, My Native Place Is
          Eluru, Which Is Located In Andhra Pradesh. This Is A Little Glimpse Of
          Who Iam.
        </span>
        <div className="EduExp">
          <div className="education">
            <span className="educationTitle">Education</span>
            <div className="mydata1">
              <div className="btech">
                <span className="btechTitle">B-Tech [2018-2022]</span>
                <span className="btechCollegeName">
                  Bharath Institute Of Science And Technology
                </span>
              </div>
              <div className="inter">
                <span className="interTitle">Intermediate [2016-2018]</span>
                <span className="interCollegeName">
                  Narayana Junior College
                </span>
              </div>
              <div className="tenth">
                <span className="tenthTitle">10th Class [2015-2016]</span>
                <span className="tenthSchoolName">Bhashyam Public School</span>
              </div>
            </div>
          </div>
          <div className="experience">
            <span className="experienceTitle">Experience</span>
            <div className="mydata2">
              <div className="exp1">
                <span className="exp1Title">2023-Present</span>
                <span className="exp1CompanyName">
                  GUVI Geek Network Private Limited
                </span>
              </div>
              <div className="exp2">
                <span className="exp2Title">2022 [Aug-Nov]</span>
                <span className="exp2CompanyName">
                  Internship In Verzeo Edutech
                </span>
              </div>
              <div className="exp3">
                <span className="exp3Title">2022 [Aug-Nov]</span>
                <span className="exp3CompanyName">
                  Internship In Verzeo Edutech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
