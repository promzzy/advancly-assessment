import { FC } from "react";
import classes from './TotalSpentChart.module.css'
import { BiDollar } from "react-icons/bi";
import Dropdown from "../Dropdown";
import { DATE_RANGE } from "../../utils/constants";

const TotalSpentChart: FC = () => {
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
    </div>
  )
}

export default TotalSpentChart;
