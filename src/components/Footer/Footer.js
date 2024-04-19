import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__year">&copy; 2024</p>
        <nav className="footer__menu">
          <ul className="footer__list list">
            <li>
              <a
                target="_blank"
                href="https://practicum.yandex.ru"
                className="footer__link link" rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/LosevAlexey"
                className="footer__link link" rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

