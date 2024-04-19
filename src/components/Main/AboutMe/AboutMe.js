/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import phpto from "../../../images/photo.svg";

export default function AboutMe() {
  return (
    <section id="student" className="aboutme">
      <div className="aboutme__header">
        <h2 className="aboutme__title">Студент</h2>
      </div>
      <div className="aboutme__container">
        <div className="aboutme__wrapper">
          <div>
            <h2 className="aboutme__name">Алексей</h2>
            <p className="aboutme__subtitle">специальность</p>
            <p className="aboutme__text">о себе</p>
          </div>
          <div>
            <a className="aboutme__link" href="https://github.com/LosevAlexey">
              Github
            </a>
          </div>
        </div>
        <img src={phpto} className="aboutme__photo" alt="Фото" />
      </div>
    </section>
  );
}
