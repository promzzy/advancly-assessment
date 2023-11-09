import { FC } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { TbBus } from "react-icons/tb";
import { SlSocialDropbox } from "react-icons/sl";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import classes from './Dashboard.module.css'
import ItemCountCard from "../../components/ItemCountCard";
import PriceVariationChart from "../../components/PriceVariationChart";
import TotalSpentChart from "../../components/TotalSpentChart";
import SpendEntityChart from "../../components/SpendEntityChart";
import Dropdown from "../../components/Dropdown";
import { DATE_RANGE } from "../../utils/constants";

const Dashboard: FC = () => {
  return(
    <div className={classes.pageRoot}>
      <div className={classes.dashBoardTop}>
        <button className={classes.pageTitleBtn}>
          <span className={classes.leftIcon}>
            <BiChevronLeft />
          </span>
          <h4>Buyer analytics Overview</h4>
        </button>

            <div className={classes.dropdownWrapper}>
          <Dropdown options={DATE_RANGE} className={classes.dropDown} />
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.leftContent}>
          <div>
            <TotalSpentChart />
          </div>
          <div style={{flex: 1}}>
            <SpendEntityChart />
          </div>
        </div>
        <div className={classes.rightContent}>
          <div className={classes.ItemCountsAnalytic}>
            <ItemCountCard icon={<TbBus />} title="SUPPLIER COUNT" count={4525} trend="down" trendPercentage={12} />
            <ItemCountCard icon={<SlSocialDropbox />} title="PURCHASE ORDER" count={1555} trend="up" trendPercentage={12}  />
          </div>
          <div className={classes.ItemCountsAnalytic}>
            <ItemCountCard icon={<LiaFileInvoiceSolid />} title="INVOICE COUNT" count={4525} />
            <ItemCountCard icon={<SlSocialDropbox />} title="PO/INVOICE ACCURACY" count={2578} />
          </div>
          <div style={{flex: 1}}>
            <PriceVariationChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
