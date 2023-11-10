import { FC } from "react";
import classes from "./SpendEntityChart.module.css";
import { AiFillBank } from "react-icons/ai";
import graphImage from "../../assets/images/bar-side-chart.png";

const SpendEntityChart: FC = () => {
  return (
    <div className={classes.componentRoot}>
      <div className={classes.comonentIcon}>
        <AiFillBank />
      </div>
      <div className={classes.compTitle}>SPEND BY LEGAL ENTITY</div>
      <div className={classes.countValue}>50457</div>
      <div>
        <img className={classes.imageWrapper} src={graphImage} alt="" />
      </div>
    </div>
  );
};

export default SpendEntityChart;
