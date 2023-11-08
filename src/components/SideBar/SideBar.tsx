import { FC, useCallback } from "react";
import classes from './SideBar.module.css'
import { NAVIGATION_PATHS } from "./constants";
import { useLocation } from "react-router-dom";



interface SideBarProps {
  isMenuCollapsed: boolean;
}

 interface RouteTypeProps  {
  name: string,
  path: string,
  icon: any,
}

const SideBar: FC<SideBarProps> = ({isMenuCollapsed}) => {

  const location = useLocation()

     const isPathVisited = useCallback(
    (navItem: RouteTypeProps) =>
      new RegExp(`^${ navItem.path}`).test(
        location.pathname,
      ),
    [location.pathname],
  );

  return(
    <div className={`${classes.compRoot} ${isMenuCollapsed && classes.collapseMenu}`}>
      <div className={classes.navWrap}>
        {
         NAVIGATION_PATHS.map((path: RouteTypeProps) => (
         <button
         key={path.path}
         onClick={() => {}}
          className={`${classes.routeBtn} ${ isPathVisited(path) ? classes.isActive : undefined}`}>
          <span className={classes.navMenuIcon}>
           { <path.icon />}
          </span>
          <span className={`${classes.navName} ${isMenuCollapsed && classes.pathNameHidden }`}>{path.name}</span>
         </button>
         ))
        }
      </div>
      <div>SideBar</div>
    </div>
  )
}

export default SideBar;
