import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Main from "./Main";
export default function Places() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  )
}