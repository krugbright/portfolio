import React from "react";
import "./service.css";
import CardItem from "../../components/card_item/CardItem";
import frontend from "../../assets/coding.png";
import backend from "../../assets/backend.png";
import appdev from "../../assets/app-dev.png";

function Service() {
  return (
    <div className="service__container section__padding" id="service">
      <CardItem
        icon={frontend}
        title="Front-end web"
        text="Transforming ideas into visually appealing and user-friendly interfaces is my forte. Using technologies like ReactJS and Flutter, I create dynamic and responsive frontend designs that engage users and elevate user experiences."
      />

      <CardItem
        icon={appdev}
        title="Front-end mobile"
        text="In the mobile-driven era, having a strong mobile presence is essential. I excel in crafting  mobile applications using Flutter, delivering smooth performance and a consistent experience across both Android and iOS platforms."
      />
      <CardItem
        icon={backend}
        title="Back-end"
        text="The backbone of any powerful application is its backend. I specialize in developing robust and scalable backend systems using frameworks like Laravel and Django. From database management to server logic, I ensure your application functions seamlessly."
      />
    </div>
  );
}

export default Service;
