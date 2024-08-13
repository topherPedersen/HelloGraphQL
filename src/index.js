import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import Foo from "./routes/foo";
import Bar from "./routes/bar";

// React Router Quick Start Guide: https://reactrouter.com/en/main/start/tutorial

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "foo",
    element: <Foo />,
  },
  {
    path: "bar",
    element: <Bar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
