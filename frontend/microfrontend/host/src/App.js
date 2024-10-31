import './App.css';
import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import './blocks/page/page.css';
import GlobalStore from "./store/GlobalStore";
function App({stores}) {
  const history = useNavigate();
  if (!window.GlobalStore) {
    window.GlobalStore = GlobalStore;
    initChildrenStores(stores);
  }
  React.useEffect(() => {
    const isSessionCreated = checkSession();
    if (!isSessionCreated) history('/auth/signin')
    else history('/places');
  }, [history]);
  const [email, setEmail] = React.useState("");
  const onSignOut = () => {}
  function checkSession() {
    return window.GlobalStore.getStore('User')
  }
  function initChildrenStores(stores) {
    if (Array.isArray(stores)) {
      stores.forEach(storeInit => {
        window.GlobalStore.add(...storeInit())
      })
    }
  }
  return (
    <div className="page__content">
      <div>
        <Outlet />
      </div>
    </div>
);
}

export default App;
