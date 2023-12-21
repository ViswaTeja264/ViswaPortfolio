import React from "react";
import "./Home.css";
import Image from "../../assets/image.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="homeContent">
        <span className="hello">Hi, There</span>
        <span className="HomeText">
          I'm <span className="HomeName">Viswa Teja</span> <br /> Full Stack
          Developer
        </span>
        <p className="HomeBio">
          Passionate full stack developer with expertise in front-end and
          back-end technologies, <br /> creating seamless and innovative web solutions
          for optimal user experiences.
        </p>
      </div>
      <img src={Image} alt="Viswa" className="homeImg" />
    </section>
  );
};

export default Home;
