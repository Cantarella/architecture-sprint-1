import App from "../App";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PlacesModuleInit from 'places/EntryPoint';
import UserModuleInit from 'user/EntryPoint';
const {root: Auth, storeInit: userStoreInit} = UserModuleInit();
const {root: Places, storeInit: placesStoreInit} = PlacesModuleInit();
console.log(userStoreInit, placesStoreInit)
debugger
const readyStores = [userStoreInit, placesStoreInit];
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App stores={readyStores} />,
    children: [
      {
        path: 'places/*',
        element: <Places />
      },
      {
        path: 'auth/*',
        element: <Auth />
      }
    ]
  }
]);
