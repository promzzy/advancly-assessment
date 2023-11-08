import { DASHBOARD_LAYOUT_PATHS } from "./constants";
import Dashboard from '../pages/Dashboard'

const dashboardRoutes = [
      {
        path: DASHBOARD_LAYOUT_PATHS.dashboard,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_LAYOUT_PATHS.checkOut,
        element: <Dashboard />,
      },

    ]

    export default dashboardRoutes;