import React from "react";
import './Portfolio.css';




export default function Portfolio() {


  return (

    <section className="portfolio portfolio__section">

      <h2 className="portfolio__title">Портфолио</h2>

      <div className="portfolio__container">
        <a className="portfolio__link" href="https://github.com/LosevAlexey">Статичный сайт</a>
        <a className="portfolio__link" href="https://github.com/LosevAlexey">Адаптивный сайт</a>
        <a className="portfolio__link portfolio__link_last" href="https://github.com/LosevAlexey">Одностраничное приложение</a>
      </div>
    </section>
  )
}
