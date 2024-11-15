import React from 'react';
import { Link } from 'react-router-dom';
import * as auth from "./utils/auth";
import InfoTooltip from "./components/InfoTooltip/InfoTooltip";

function Register ({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState("");

  function handleSubmit(e){
    register(e);
  }

  function closeAllPopups() {
    setIsInfoToolTipOpen(false);
  }

  function register(e) {
    e.preventDefault();
    auth
      .register(email, password)
      .then((res) => {
        const userData = {
          email,
          password
        }
        onRegister(userData);
      })
      .catch((err) => {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
      });
  }
  return (
    <div className="auth-form">
      <InfoTooltip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
        status={tooltipStatus}
      />
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Регистрация</h3>
          <label className="auth-form__input">
            <input
              type="text" name="email" id="email"
              className="auth-form__textfield" placeholder="Email"
              onChange={e => setEmail(e.target.value)} required
            />
          </label>
          <label className="auth-form__input">
            <input
              type="password" name="password" id="password"
              className="auth-form__textfield" placeholder="Пароль"
              onChange={e => setPassword(e.target.value)} required
            />
          </label>
        </div>
        <div className="auth-form__wrapper">
          <button className="auth-form__button" type="submit">Зарегистрироваться</button>
          <p className="auth-form__text">Уже зарегистрированы? <Link
            className="auth-form__link" to="/signin"
          >Войти</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register;
