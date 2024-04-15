import React from "react";
import "./Login.css";
import Logo from "../../images/logo.svg";
import {Link} from "react-router-dom";


export default function Login({onSubmit}) {
  return (
    <section className="auth">
      <img className="auth__image" src={Logo} alt="Лого"></img>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form" name="login">
        <div className="auth__formElement">
          <p className="auth__label">E-mail</p>
          <input
            id="email"
            name="email"
            type="email"
            className="auth__input"
            placeholder="Почта"
            required
          />
        </div>
        <div className="auth__formElement">
          <p className="auth__label">Пароль</p>
          <input
            id="password"
            name="password"
            type="password"
            className="auth__input"
            placeholder="Пароль"
            required
          />
        </div>
      </form>
      <button type="submit" className="auth__submit" onClick={onSubmit}>
        Войти
      </button>
      <div className="auth__bottom">
        <span>Ещё не зарегистрированы?</span>
        <Link to="/signup" className="auth__link ">
          Регистрация
        </Link>
      </div>
    </section>
  );
}
