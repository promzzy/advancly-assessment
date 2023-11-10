import React, { FC } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import classes from './Trend.module.css'

interface TrendProps{
  trend?: string;
  trendPercentage?: number | string
}

const Trend: FC<TrendProps> = ({trend, trendPercentage}) => {
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
    return <div />;
  }

  export default Trend