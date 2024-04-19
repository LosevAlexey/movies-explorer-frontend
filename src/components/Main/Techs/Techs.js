import React from "react";
import './Techs.css';



export default function Techs() {


  return (

    <section className="techs" id="techs">
<div className="techs__header">
<h2 className="techs__title">Технологии</h2>
</div>
      <div className="techs__techs">
      <p className="techs__text">7 технологий</p>
      <p className="techs__subtext">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__container">
          <li className="techs__icon">HTML</li>
          <li className="techs__icon">CSS</li>
          <li className="techs__icon">JS</li>
          <li className="techs__icon">React</li>
          <li className="techs__icon">Git</li>
          <li className="techs__icon">Express.js</li>
          <li className="techs__icon">mongoDB</li>
        </ul>
        </div>
    </section>

  )
}
