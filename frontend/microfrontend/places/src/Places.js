import React from "react";
import store from "./store/store";
import {save} from "./store/places";
import { Provider } from "react-redux";
import Main from "./Main";
export default function Places() {
  if (window.GlobalStore) window.GlobalStore.add('Cards', store, {save})
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  )
}