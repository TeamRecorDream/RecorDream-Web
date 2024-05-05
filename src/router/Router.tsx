import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      // {
      //   path: "/error",
      //   element: <ErrorPage />,
      // },
    ],
  },
]);

export default router;
