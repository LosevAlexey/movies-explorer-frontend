import React from "react";
import "./Login.css";
import Logo from "../../images/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import useForm from "../../hooks/useForm";


export default function Login({ onLogin, success, isAuth }) {
  const { enteredValues, handleChange, isFormValid, resetForm, errors } = useForm();

  const navigate = useNavigate();


  if (isAuth) {
    navigate(-1)
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(enteredValues);
  };

  return (
    <section className="auth">
      <Link to="/">
      <img className="auth__image" src={Logo} alt="Лого"></img>
      </Link>
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
            onChange={handleChange}
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
            errors.password && <p className="auth__error">{errors.password }</p>
          }
        </div>
      </form>
      <button type="submit" className="auth__submit" disabled={!isFormValid} onClick={handleSubmit}>
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
