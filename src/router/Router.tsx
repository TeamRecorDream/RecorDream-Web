import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/LoginPage";
import RecordreamLayout from "../pages/RecordreamLayout";
import DeletePage from "../pages/DeletePage";
import CompletePage from "../pages/CompletePage";
import UnregisteredPage from "../pages/UnregisteredPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        element: <RecordreamLayout iconOn={true} btnColor="red" btnMessage="탈퇴하기" />,
        children: [
          {
            path: "/delete",
            element: <DeletePage />,
          },
        ],
      },
      {
        element: <RecordreamLayout iconOn={false} btnColor="white" btnMessage="확인" />,
        children: [
          { path: "/complete", element: <CompletePage /> },
          { path: "/unregistered", element: <UnregisteredPage /> },
        ],
      },
    ],
  },
]);

export default router;
