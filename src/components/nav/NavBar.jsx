import React from "react";
import "./navbar.css";
import ButtonRed from "../../components/button_red/ButtonRed";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav__container section__padding">
      <div className="nav__container-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="nav__container-links">
        <a href="#home">Home</a>
        <a href="#service">Services</a>
        <a href="#experience">Experience</a>
        {/* <a href="#education">Education</a> */}
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav__container-btn">
        <ButtonRed>Download CV</ButtonRed>
      </div>

      <div className="nav__container-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav__container-mobile_links">
            <a href="#home">Home</a>
            <a href="#service">Services</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <div className="nav__container-mobile_btn">
              <ButtonRed>Download CV</ButtonRed>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
