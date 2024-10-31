import React from "react";
import store from "./store/store";
import {save} from "./store/user";
import { Provider } from "react-redux";
import Login from "./Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Register";
import './blocks/page/page.css';
import { Layout } from "./Layout";
export default function Auth() {
  const history = useNavigate();
  const [email, setEmail] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  function onLogin(res) {
    setEmail(res.email);
    setIsLoggedIn(true);
    history("/");
  }
  function onRegister(res) {
    history.push("/auth/signin");
  }
  const onSignOut = () => {}
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="signin" element={<Login onLogin={onLogin} />} />
            <Route path="signup" element={<Register onRegister={onRegister} />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  )
}