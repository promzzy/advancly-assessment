import { DASHBOARD_LAYOUT_PATHS } from "./constants";
import Dashboard from "../pages/Dashboard";

const dashboardRoutes = [
  {
    path: "/",
    element: <Dashboard title="Home" />,
  },
  {
    path: DASHBOARD_LAYOUT_PATHS.dashboard,
    element: <Dashboard title="Dashboard analytics Overview" />,
  },
  {
    path: DASHBOARD_LAYOUT_PATHS.checkOut,
    element: <Dashboard title="Checkout Overview" />,
  },
  {
    path: DASHBOARD_LAYOUT_PATHS.vendors,
    element: <Dashboard title="Vendor Overview" />,
  },
  {
    path: DASHBOARD_LAYOUT_PATHS.clients,
    element: <Dashboard title="Clients Overview" />,
  },
  {
    path: DASHBOARD_LAYOUT_PATHS.salesOrders,
    element: <Dashboard title="Sales analytics Overview" />,
  },
  {
    path: DASHBOARD_LAYOUT_PATHS.accounts,
    element: <Dashboard title="Account Overview" />,
  },
];

export default dashboardRoutes;
