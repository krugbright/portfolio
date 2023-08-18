import React from "react";
import "./contact.css";
import Map from "../../assets/map.png"
import Phone from "../../assets/phone-call.png"
import Mail from "../../assets/email.png"
import Available from "../../assets/check.png"
import Send from "../../assets/send.png"

function Contact() {
  return (
    <section className="contact__container" id="contact">
      <div className="contact__container-left">
        <div className="card__item-address">
          <img src={Map} alt="map" />
          <p>Agamandin, Abomey-Calavi</p>
        </div>
        <div className="card__item-address">
        <img src={Phone} alt="map" />
          <p>+229 67625040</p>
        </div>
        <div className="card__item-address">
        <img src={Mail} alt="map" />
          <p>rostandulrich@gmail.com</p>
        </div>
        <div className="card__item-address">
        <img src={Available} alt="map" />
          <p>Freelance available</p>
        </div>
      
      </div>
      <div className="contact__container-right">
        <div className="contact__input-container">
          <input type="text" placeholder="Enter Your Name" hidden={true} />
        </div>
        <div className="contact__input-container">
          <input type="text" placeholder="Enter Your Name" hidden={true} />
        </div>
        
        <div className="contact__input-container">
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="contact__input-container">
          <input type="text" placeholder="Enter Your Phone" />
        </div>
        <div className="contact__input-container">
          <input type="text" placeholder="Enter Your Email" />
        </div>
        <div className="contact__input-container">
          <input type="text" placeholder="Enter Your Subject" />
        </div>
        <div className="contact__text-container">
          <textarea name="" id="" placeholder="Type Your Message" ></textarea>
        </div>
        <div className="contact__btn-container">
          <button> Send Message <img src={Send} alt="map" /></button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
