import React from "react";
import './Promo.css';
import landinglogo from "../../../images/landing_logo.svg";
/* import { useLocation, Link } from "react-router-dom"; */

export default function Promo() {
 /*  const location = useLocation();

  const path = location.pathname === "/sign-in" ? "/sign-up" : "/sign-in";
  const LinkName = location.pathname === "/sign-in" ? "Регистрация" : "Войти";
 */
  return (

    <section className="promo">
      <img className="promo__image" src={landinglogo} alt="Картинка к promo"></img>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>

  )
}
