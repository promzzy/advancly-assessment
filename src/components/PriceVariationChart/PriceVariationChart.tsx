import { FC, useMemo } from "react";
import classes from './PriceVariationChart.module.css'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import graphImage from '../../assets/images/bargraph.png'

const PriceVariationChart: FC = () => {

   const trend = 'up'
  const trendPercentage = 135

    const trendValue = useMemo(() => {
    if (trend === "up") {
      return (
        <div className={`${classes.trendWrapper} ${classes.up}`}>
          <BiSolidUpArrow />
          <span>{`${trendPercentage} % more order`}</span>
        </div>
      );
    }
    if (trend === "down") {
      return (
        <div  className={`${classes.trendWrapper} ${classes.down}`}>
          <BiSolidDownArrow />
          <span>{`${trendPercentage} % less order`}</span>
        </div>
      );
    }
    return null;
  }, [trend, trendPercentage]);

  return(
    <div className={classes.priceChartRoot}>
        <div className={classes.comonentIcon}>
          <FaClipboardList />
        </div>
      <div className={classes.compTitle}>
        VARIATION IN PRICE IN TIME
      </div>
      <div className={classes.countValueAnalytics}>
        <div className={classes.countValue}>54,525</div>
        <div>{trendValue}</div>
      </div>
           <div >
        <img className={classes.imageWrapper} src={graphImage} alt="" />
      </div>
    </div>
  )
}

export default PriceVariationChart;
