import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";


export default function Profile({userName = "Виталий"}) {

  return (
    <section className="profile">
      <div className={"profile__content"}>
      <h2 className="profile__title">Привет, {userName}!</h2>
      <form className="profile__form">
        <div className="profile__formElement">
          <p>Имя</p>
          <input
            id="name"
            name="name"
            type="text"

            className="profile__formInput"
            placeholder="Почта"
            required
          />
        </div>
        <div className="profile__formSeparator"></div>
        <div className="profile__formElement">

          <p>E-mail</p>
          <input
            id="email"
            name="email"
            type="email"

            className="profile__formInput"
            placeholder="Пароль"
            required
          />
        </div>

      </form>

      <div className="profile__buttons">
        <button className="profile__edit">Редактировать</button>
        <Link to="/" className="profile__exit">Выйти из аккаунта</Link>
      </div>
      </div>
    </section>
  );
}
