import { Navigate, useRoutes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import FetchList from './fetchList/FetchList';
import DashboardLayout from './layout/DashboardLayoutt';
import NotFound from './layout/NotFount';
import Todo from './todo/Todo';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Dashboard /> },
        { path: 'todo', element: <Todo /> },
        { path: 'fetch-list', element: <FetchList /> },
      ],
    },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
