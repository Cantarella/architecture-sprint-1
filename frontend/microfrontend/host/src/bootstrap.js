import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import {Router} from "./routes/Router";

const root = document.getElementById('root');

if (!root) {
  throw new Error('Error!');
}
const container = createRoot(root);
container.render(
  <RouterProvider router={Router} />
)