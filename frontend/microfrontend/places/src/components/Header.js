import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logoPath from '../images/logo.svg';
import '../blocks/header/header.css';

function Header ({onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      <div className="header__wrapper">
        <p className="header__user">{email}</p>
        <button className="header__logout" onClick={handleSignOut}>Выйти</button>
      </div>
    </header>
  )
}

export default Header;
