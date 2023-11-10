import { FC } from "react";
import classes from "./TopBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  onClickToggle: () => void;
}

const TopBar: FC<TopBarProps> = ({ onClickToggle }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.compRoot}>
      <button className={classes.toggleMenuBtn} onClick={onClickToggle}>
        <AiOutlineMenu />
      </button>
      <h3 className={classes.businessLogo} onClick={() => navigate("/")}>
        Beximco
      </h3>
    </div>
  );
};

export default TopBar;
