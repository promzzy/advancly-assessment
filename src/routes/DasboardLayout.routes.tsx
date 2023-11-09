import { DASHBOARD_LAYOUT_PATHS } from "./constants";
import Dashboard from '../pages/Dashboard'

const dashboardRoutes = [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.dashboard,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.checkOut,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.vendors,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.clients,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.salesOrders,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.accounts,
        element: <Dashboard />,
      },

    ]

    export default dashboardRoutes;