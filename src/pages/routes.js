import { Navigate, useRoutes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import DashboardLayout from './layout/DashboardLayoutt';
import NotFound from './layout/NotFount';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: '', element: <Dashboard /> }],
    },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
