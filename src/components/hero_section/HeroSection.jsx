import React from "react";
import "./herosection.css";
import profile from "../../assets/profile-bg-red.png";
import IconCard from "../icon_card/IconCard";

function HeroSection() {
  return (
    <div className="hero__container" id="home">
      <div className="hero__container-text">
        <h3>
          Hello, <span>I'm</span>
        </h3>
        <h1>KPO-N-MEY Rostand</h1>
        <h2>Web and Mobile Developer</h2>
        <p>
          Passionate about digital creation, I am a versatile web and mobile
          developer, specializing in cutting-edge technologies. My expertise
          spans a range of frameworks and languages, including Laravel, Flutter,
          Django, and ReactJS. With a passion for solving complex problems, I
          enjoy crafting interactive and intuitive experiences that leave a
          lasting impact. My approach combines technical rigor with uninhibited
          creativity to deliver elegant and high-performing solutions. Every
          line of code I write is an opportunity to innovate and contribute to
          an ever-evolving digital world. Join me on this exciting journey of
          bringing ideas to life through programming.
        </p>
        <h4>Find me on</h4>
        <div className="media__contact">
          <IconCard link={"https://github.com/krugbright"} >uil uil-github-alt</IconCard>
          <IconCard link={"https://www.linkedin.com/in/rostand-kpo-n-mey/"}>uil uil-linkedin-alt</IconCard>
          <IconCard link={"mailto:rostandulrich98@gmail.com"}>uil uil-envelope</IconCard>
        </div>
      </div>
      <div className="hero__container-img">
        <img src={profile} alt="my face" />
      </div>
    </div>
  );
}

export default HeroSection;
