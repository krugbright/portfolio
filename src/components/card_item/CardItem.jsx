import React from "react";
import "./card_item.css";

function CardItem({ icon, title, text }) {
  return (
    <div className="card__container">
      <img className="card__container-icon" alt="icon_service" src={icon} />
      <div className="card__container-title">
        <p> {title} </p>
      </div>
      <div className="card__container-text">
        <p> {text} </p>
      </div>
    </div>
  );
}

export default CardItem;
