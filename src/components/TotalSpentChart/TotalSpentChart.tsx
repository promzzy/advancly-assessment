import { FC, useMemo } from "react";
import classes from './TotalSpentChart.module.css'
import { BiDollar, BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import Dropdown from "../Dropdown";
import { DATE_RANGE } from "../../utils/constants";
import graphImage from '../../assets/images/graph-image.png'

const TotalSpentChart: FC = () => {

  const trend = 'up'
  const trendPercentage = 135
    const trendValue = useMemo(() => {
    if (trend === "up") {
      return (
        <div className={`${classes.trendWrapper} ${classes.up}`}>
          <BiSolidUpArrow />
          <span>{`$${trendPercentage}`}</span>
        </div>
      );
    }
    if (trend === "down") {
      return (
        <div  className={`${classes.trendWrapper} ${classes.down}`}>
          <BiSolidDownArrow />
          <span>{`$${trendPercentage}`}</span>
        </div>
      );
    }
    return null;
  }, [trend, trendPercentage]);
  return(
    <div className={classes.componentRoot}>
      <div className={classes.compTop}>
        <div className={classes.currencyIcon}>
          <BiDollar />
        </div>
        <div className={classes.dropdownWrapper}>
          <Dropdown options={DATE_RANGE} className={classes.dropDown} />
        </div>
      </div>
            <div className={classes.compTitle}>TOTAL SPEED</div>
      <div className={classes.countValueAnalytics}>
        <div className={classes.countValue}>
         $12,000
        </div>
        <div>{trendValue}</div>
      </div>
      <div >
        <img className={classes.imageWrapper} src={graphImage} alt="" />
      </div>
    </div>
  )
}

export default TotalSpentChart;
