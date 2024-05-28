import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import LoginPage from '../pages/LoginPage';
import RecordreamLayout from '../layouts/RecordreamLayout';
import DeletePage from '../pages/DeletePage';
import CompletePage from '../pages/CompletePage';
import UnregisteredPage from '../pages/UnregisteredPage';
import KakaoLoginPage from '../pages/KakaoLoginPage';

import DeleteLayout from '../layouts/DeleteLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/auth/login',
        element: <KakaoLoginPage />,
      },
      {
        element: <DeleteLayout iconOn={true} />,
        children: [
          {
            path: '/delete',
            element: <DeletePage />,
          },
        ],
      },
      {
        element: <RecordreamLayout iconOn={false} />,
        children: [
          { path: '/complete', element: <CompletePage /> },
          { path: '/unregistered', element: <UnregisteredPage /> },
        ],
      },
    ],
  },
]);

export default router;
