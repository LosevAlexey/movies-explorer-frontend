import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import React, { useRef } from "react";
import "./Header.css";
import profile from "../../images/profile.svg"
function Header({ isAuth = true }) {
  const menuRef = useRef();
  const location = useLocation();
  const path = location.pathname;

  const handleOpenMenu = () => {
    const menu = menuRef.current;
    menu.style.opacity = 1;
    menu.style.transform = 'translateX(0)';
  };

  const handleCloseMenu = () => {
    const menu = menuRef.current;
    menu.style.opacity = 0;
    menu.style.transform = 'translateX(100%)';
  };


  const isHomepage = path === "/";

  return (
    <header className={"header" + (isHomepage ? " header_homepage" : "")}>
      {isAuth ? (
        <nav className="header__navigate header__navigate-movies">
          <ul className="header__movies text" ref={menuRef}>
            <li>
            <Link to="/">
            <img className="link" src={logo} alt="Логотип"/>
            </Link>
            </li>
            <li className="header__block">
            <div className={`header__movies-item ${path === "/movies" && "header__movies-item_selected"}`}>
              <Link to="/movies" className="link" onClick={handleCloseMenu}>
                Фильмы
              </Link>
            </div>
            <div className={`header__movies-item ${path === "/saved-movies" && "header__movies-item_selected"}`}>
              <Link to="/saved-movies" className="link" onClick={handleCloseMenu}>
                Сохранённые фильмы
              </Link>
            </div>
            </li>
            <li className="header__movies-item header__profile">
              <Link to="/profile" className="header__link-profile link" onClick={handleCloseMenu}>
                <img src={profile} alt="Аккаунт" className="header__profile-image"/>
                Аккаунт
              </Link>
            </li>
            <li className="header__burger-open">
              <button type="button" className="header__burger link" onClick={handleOpenMenu}>
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
                 <div className="header__burger-line"></div>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <div className="header__navigate-auth">
           <Link to="/">
            <img className="link" src={logo} alt="Логотип"/>
            </Link>
        <nav className="header__navigate">
          <ul className="header__auth text">
            <li className="header__auth-item link">
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
            </li>
            <li className="header__auth-item link header__auth-item_accent  ">
              <Link to="/signin" className="header__link">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      )}

      <div className="burger">
      <ul className="burger__movies" ref={menuRef}>
            <li className="burger__button-close">
            <button type="button" className="burger__close link" onClick={handleCloseMenu}></button>
            </li>
            <li className={`burger__movies-item ${path === "/" && "burger__movies-item_selected"}`}>
              <Link to="/" className="link-burger" onClick={handleCloseMenu}>
                Главная
              </Link>
            </li>
            <li className={`burger__movies-item ${path === "/movies" && "burger__movies-item_selected"}`}>
              <Link to="/movies" className="link-burger" onClick={handleCloseMenu}>
                Фильмы
              </Link>
            </li>
            <li className={`burger__movies-item ${path === "/saved-movies" && "burger__movies-item_selected"}`}>
              <Link to="/saved-movies" className="link-burger" onClick={handleCloseMenu}>
                Сохранённые фильмы
              </Link>
            </li>
            <li className=" burger__movies-item">
              <Link to="/profile" className="burger__link-profile header__link-profile link-burger link-burger-secondary" onClick={handleCloseMenu}>
              <img src={profile} alt="Аккаунт" className="header__profile-image"/>
                Аккаунт
              </Link>
            </li>

            {/* <li className="header__movies-item header__profile">
              <Link to="/profile" className="header__link-profile link" onClick={handleCloseMenu}>
                <img src={profile} alt="Аккаунт" className="header__profile-image"/>
                Аккаунт
              </Link>
            </li> */}
            </ul>
      </div>
    </header>
  );
}

export default Header;
