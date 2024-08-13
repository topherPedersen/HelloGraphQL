import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import Foo from "./routes/foo";
import NetherHour from "./routes/netherHour";
import SpotifyRedirect from "./routes/spotify-redirect";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

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
    path: "/netherHour",
    element: <NetherHour />,
  },
  {
    path: "spotify-redirect",
    element: <SpotifyRedirect />,
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
