import React from "react";
import './Portfolio.css';




export default function Portfolio() {


  return (

    <section className="portfolio">

      <h2 className="portfolio__title">Портфолио</h2>

      <div className="portfolio__container">
        <a className="portfolio__link" target={"_blank"} href="https://github.com/LosevAlexey/how-to-learn">Статичный сайт</a>
        <a className="portfolio__link" target={"_blank"} href="https://github.com/LosevAlexey/russian-travel">Адаптивный сайт</a>
        <a className="portfolio__link portfolio__link_last" target={"_blank"} href="https://github.com/LosevAlexey/react-mesto-api-full-gha">Одностраничное приложение</a>
      </div>
    </section>
  )
}
