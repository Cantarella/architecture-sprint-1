import Places from "../Places";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: '*',
    element: <Places />,
  }
];

export const Router = createBrowserRouter(routes);
export default routes