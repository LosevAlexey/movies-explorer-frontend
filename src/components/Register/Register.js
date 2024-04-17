import React from "react";
import "./Register.css";
import Logo from "../../images/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import useForm from "../../hooks/useForm";


export default function Register({ onRegister, success, isAuth }) {
  const { enteredValues, handleChange, isFormValid, resetForm, errors } = useForm();

  const navigate = useNavigate();


  if (isAuth) {
    navigate(-1)
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(enteredValues);
  };
  return (
    <section className="auth">
      <Link to="/">
      <img className="auth__image" src={Logo} alt="Лого"></img>
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form" name="login">
        <div className="auth__formElement">
          <p className="auth__label">Имя</p>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            className="auth__input"
            placeholder="Ваше имя"
            minLength={2}
            required
          />
          {
            errors.name && <p className="auth__error">{errors.name }</p>
          }
        </div>
        <div className="auth__formElement">
          <p className="auth__label">E-mail</p>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            className="auth__input"
            placeholder="Почта"
            required
          />
          {
            errors.email && <p className="auth__error">{errors.email }</p>
          }
        </div>
        <div className="auth__formElement">
          <p className="auth__label">Пароль</p>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            className="auth__input"
            placeholder="Пароль"
            required
            minLength={6}
          />
          {
            errors.password && <p className="auth__error">{ errors.password }</p>
          }
        </div>


      </form>

      <button type="submit" disabled={!isFormValid} className="auth__submit auth__submit_register" onClick={handleSubmit}>
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
