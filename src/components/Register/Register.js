import React from "react";
import "./Register.css";
import Logo from "../../images/logo.svg";
import {Link} from "react-router-dom";


export default function Register({onSubmit}) {

  const errors = {
    password: true,
    email: false
  }
  return (
    <section className="auth">
      <img className="auth__image" src={Logo} alt="Лого"></img>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form" name="login">
        <div className="auth__formElement">
          <p className="auth__label">Имя</p>
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
          {
            errors.password && <p className="auth__error">Что-то пошло не так...</p>
          }
        </div>


      </form>

      <button type="submit" className="auth__submit auth__submit_register" onClick={onSubmit}>
        Зарегистрироваться
      </button>
      <div className="auth__bottom">

        <span>Уже зарегистрированы? </span>

        <Link to="/signin" className="auth__link">
          Войти
        </Link>
      </div>
    </section>
  );
}
