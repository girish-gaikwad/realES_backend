import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../pages/Layout/layout";
import { ErrorPage } from "../pages/Error/error";
import Cotation from "../pages/cotations/contation";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/dashboard",
        element: <div>dashboard</div>,
      },
      {
        path: "/Components",
        element: <Cotation/>,
      },
      {
        path: "/person",
        element: <div>items</div>,
      },
      {
        path: "/corp",
        element: <div>inventory</div>,
      },
      {
        path: "/tag",
        element: <div>alerts</div>,
      },
      {
        path: "/setting",
        element: <div>alerts</div>,
      },
      {
        path: "/cloude",
        element: <div>alerts</div>,
      },
      {
        path: "/report",
        element: <div>alerts</div>,
      },
      {
        path: "/folder",
        element: <div>alerts</div>,
      },
      {
        path: "/messages",
        element: <div>alerts</div>,
      },
    ],
  },
]);



