import React from 'react';
import './blocks/auth-form/auth-form.css';
import './blocks/login.css';
import * as auth from "./utils/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { save } from "./store/user";

function Login ({onLogin}) {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useNavigate();
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  function handleSubmit(e){
    e.preventDefault();
    const userData = {
      email,
      password
    }
    login(userData);
  }

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then(({data}) => {
          dispatch(save(data))
          debugger
          onLogin(data)
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  }, [history]);

  function login({ email, password }) {
    auth
      .login(email, password)
      .then((res) => {
        dispatch(save(res))
        onLogin(res)
      })
      .catch((err) => {
        // setTooltipStatus("fail");
        // setIsInfoToolTipOpen(true);
      });
  }

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Вход</h3>
          <label className="auth-form__input">
            <input
              type="text" name="name" id="email"
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
        <button className="auth-form__button" type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login;
