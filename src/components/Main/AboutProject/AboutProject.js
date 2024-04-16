import React from "react";
import './AboutProject.css';



export default function AboutProject() {


    return (
        <section className="aboutProject" id="aboutProject">
            <div className="aboutProject__header">
                <h2 className="aboutProject__title">О проекте</h2>
            </div>
            <div className="aboutProject__wrapper">
                <div className="aboutProject__info">
                    <div className="aboutProject__container">
                        <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="aboutProject__container">
                        <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="aboutProject__time-line">
                    <div className="aboutProject__time-block aboutProject__time-block_size_small">
                        <p className="aboutProject__time">1 неделя</p>
                        <p className="aboutProject__caption">Back-end</p>
                    </div>
                    <div className="aboutProject__time-block aboutProject__time-block_size_big">
                        <p className="aboutProject__time aboutProject__time_color_grey">4 недели</p>
                        <p className="aboutProject__caption">Front-end</p>
                    </div>
                </div>
            </div>
        </section>


    )

/*   return (

    <section className="aboutproject">

      <h2 className="promo__title">О проекте</h2>
    </section>

  ) */
}
