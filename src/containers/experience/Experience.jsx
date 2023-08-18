import React from "react";
import "./experience.css";

const experiences = [
  {
    name: "ASECNA",
    duration: "Mars. 2018 - Avril. 2018",
    poste: "Technicien réseau",
  },
  {
    name: "Blolab",
    duration: "Août. 2019 - Sept. 2019",
    poste: "Développeur IOT",
  },
  {
    name: "BSSI",
    duration: "Août. 2020 - Oct. 2021",
    poste: "Développeur fullstack",
  },
  {
    name: "KAYA MAGA",
    duration: "Nov. 2021 - Déc. 2022",
    poste: "Développeur mobile",
  },
  {
    name: "Waouh Monde",
    duration: "Déc. 2022 - Fév.2023",
    poste: "Développeur fullstack",
  },
  {
    name: "E-GBAVOU",
    duration: "Fév. 2023 - Aujourd'hui",
    poste: "Développeur mobile",
  },
];

function Experience() {
  return (
    <section className="exp__container section__padding" id="experience">
      <ul className="timeline__list">
        {experiences.map((item, index) => (
          <li className="timeline__list-item" key={index}>
            <div className="timeline__list-item__name"> {item.name} </div>
            <div className="timeline__list-item__duration">{item.duration}</div>
            <div className="timeline__list-item__poste">{item.poste}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
