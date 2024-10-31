import Auth  from "../Auth";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: '*',
    element: <Auth />,
  }
];

export const Router = createBrowserRouter(routes);
export default routes