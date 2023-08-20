import React from "react";
import "./experience.css";

const experiences = [
  {
    name: "ASECNA",
    duration: "March. 2018 - April. 2018",
    poste: "Network technician",
  },
  {
    name: "Blolab",
    duration: "Aug. 2019 - Sept. 2019",
    poste: "IOT Developer",
  },
  {
    name: "BSSI",
    duration: "Aug. 2020 - Oct. 2021",
    poste: "Fullstack Developer",
  },
  {
    name: "KAYA MAGA",
    duration: "Nov. 2021 - Dec. 2022",
    poste: "Developer mobile",
  },
  {
    name: "Waouh Monde",
    duration: "Dec. 2022 - Feb.2023",
    poste: "Fullstack Developer",
  },
  {
    name: "E-GBAVOU",
    duration: "February. 2023 - Aujourd'hui",
    poste: "Mobile Developer",
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
