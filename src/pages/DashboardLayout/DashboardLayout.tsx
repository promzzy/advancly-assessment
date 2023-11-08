import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import classes from './DashboardLayout.module.css'

const DashboardLayout: FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)
  return(
    <div className={classes.pageRoot}>
      <TopBar onClickToggle={() => setIsMenuCollapsed(!isMenuCollapsed)} />
      <div className={classes.mainPageBody}>
        <SideBar isMenuCollapsed={isMenuCollapsed} />
       <div className={classes.viewpoint}>
         <Outlet />
       </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
