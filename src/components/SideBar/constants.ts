import { AiOutlineHome } from "react-icons/ai";
import { DASHBOARD_LAYOUT_PATHS } from "../../routes/constants";
import { FiShoppingCart } from "react-icons/fi";
import { BsBox, BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { RiArrowRightUpLine } from "react-icons/ri";

export const NAVIGATION_PATHS = [
  {
   name: 'Dashboard',
  path: DASHBOARD_LAYOUT_PATHS.dashboard,
  icon: AiOutlineHome ,
  },
  {
   name: 'Check out',
  path: DASHBOARD_LAYOUT_PATHS.checkOut,
  icon: FiShoppingCart,
  },
  {
   name: 'Vendors',
  path: DASHBOARD_LAYOUT_PATHS.vendors,
  icon: BsBox,
  },
  {
   name: 'Clients',
  path: DASHBOARD_LAYOUT_PATHS.clients,
  icon: BsPeople,
  },
  {
   name: 'Sales Orders',
  path: DASHBOARD_LAYOUT_PATHS.salesOrders,
  icon: RiArrowRightUpLine,
  },
  {
   name: 'Account Payable',
  path: DASHBOARD_LAYOUT_PATHS.accounts,
  icon: BsCurrencyDollar,
  },
]

