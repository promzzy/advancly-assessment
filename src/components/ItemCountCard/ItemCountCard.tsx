import { FC } from "react";
import classes from "./ItemCountCard.module.css";
import Trend from "../Trand/Trend";

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
  return (
    <div className={classes.cardComponentRoot}>
      <div className={classes.comonentIcon}>{icon}</div>
      <div className={classes.compTitle}>{title}</div>
      <div className={classes.countValueAnalytics}>
        <div className={classes.countValue}>{count}</div>
        <div>
          <Trend trend={trend} trendPercentage={trendPercentage} />
        </div>
      </div>
    </div>
  );
};

export default ItemCountCard;
