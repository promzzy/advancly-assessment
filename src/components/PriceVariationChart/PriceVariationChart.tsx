import { FC } from "react";
import classes from "./PriceVariationChart.module.css";
import { FaClipboardList } from "react-icons/fa";
import graphImage from "../../assets/images/bargraph.png";
import Trend from "../Trand/Trend";

const PriceVariationChart: FC = () => {
  const trend = "up";
  const trendPercentage = 135;

  return (
    <div className={classes.priceChartRoot}>
      <div className={classes.comonentIcon}>
        <FaClipboardList />
      </div>
      <div className={classes.compTitle}>VARIATION IN PRICE IN TIME</div>
      <div className={classes.countValueAnalytics}>
        <div className={classes.countValue}>54,525</div>
        <div>
          <Trend trend={trend} trendPercentage={trendPercentage} />
        </div>
      </div>
      <div>
        <img className={classes.imageWrapper} src={graphImage} alt="" />
      </div>
    </div>
  );
};

export default PriceVariationChart;
