import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../pages/DashboardLayout"
import DasboardLayoutRoutes from "./DasboardLayout.routes"

const routers = createBrowserRouter([
    {
    path: "/",
    element: <DashboardLayout />,
    children: DasboardLayoutRoutes
  },


])

export default routers