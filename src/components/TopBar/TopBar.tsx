import { FC } from "react";
import classes from './TopBar.module.css'
import { AiOutlineMenu } from "react-icons/ai";

interface TopBarProps {
   onClickToggle: () => void;
}

const TopBar: FC<TopBarProps> = ({ onClickToggle}) => {
  return(
    <div className={classes.compRoot}>
     <button className={classes.toggleMenuBtn} onClick={onClickToggle}>
       <AiOutlineMenu />
     </button>
      <h3>
        Beximco
      </h3>
    </div>
  )
}

export default TopBar;
