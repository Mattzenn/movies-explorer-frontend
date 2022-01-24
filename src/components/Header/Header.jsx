import './Header.css'
import React from 'react';
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import { useLocation } from "react-router-dom";

function Header({ isBurger, onBurger, loggedIn }) {

  const location = useLocation();

  return (
    <>
      {
        !loggedIn ?

          <header className="header header_unlogged">
            <Link to="/" className="header__logo" />
            <div className="header__button-container">
              <Link to="/signup" className="header__button">Регистрация</Link>
              <Link to="/signin" className="header__button header__button_type_sign-in">Войти</Link>
            </div>
          </header>

          :

          <header className={location.pathname === "/" ? 'header_main-page header' : 'header'}>

            <Link to="/" className="header__logo" />
            <div className="header__button-container header__button-container_registered header_registered-buttons">
              <Link to="/movies" className={location.pathname === '/movies' ? 'header__logged-button header__logged-button_active' : 'header__logged-button'}>Фильмы</Link>
              <Link to="/saved-movies" className={location.pathname === "/saved-movies" ? 'header__logged-button_active header__logged-button' : 'header__logged-button'}>Сохраненные фильмы</Link>
            </div>
            <div className="header__button-container header__button-container_registered">
              <Link to="/profile" className={location.pathname === "/" ? 'header__logged-button_account_type_mainpage header__logged-button header__logged-button_account' : 'header__logged-button header__logged-button_account'}>Аккаунт<span className="header__account-icon"></span></Link>
            </div>

            <button className="nav__button" onClick={onBurger} />
            <Burger isBurger={isBurger} onClose={onBurger} />

          </header>
      }
    </>
  )
}

export default Header;