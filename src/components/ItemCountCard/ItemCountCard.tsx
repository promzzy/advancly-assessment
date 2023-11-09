import { FC, useMemo } from "react";
import classes from "./ItemCountCard.module.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

interface ItemCountCardProps {
  icon: any;
  title: string;
  count: number | string;
  trend?: any;
  trendPercentage?: string | number;
}

const ItemCountCard: FC<ItemCountCardProps> = ({
  icon,
  title,
  count,
  trend,
  trendPercentage,
}) => {
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

  return (
    <div className={classes.cardComponentRoot}>
      <div className={classes.comonentIcon}>{icon}</div>
      <div className={classes.compTitle}>{title}</div>
      <div className={classes.countValueAnalytics}>
        <div className={classes.countValue}>{count}</div>
        <div>{trendValue}</div>
      </div>
    </div>
  );
};

export default ItemCountCard;
