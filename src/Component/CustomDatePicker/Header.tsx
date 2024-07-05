import { addYears, subYears } from "date-fns";
import * as types from "./types";

import LeftArrowIcon from "Asset/leftArrow.svg";
import RightArrowIcon from "Asset/rightArrow.svg";
import styles from "./styles.module.scss";

const Header = (props: types.DatePickerHeaderProps) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en", { month: "long" });
  const shortMonth = props.date.toLocaleString("en", { month: "short" });

  const onPrev = () => {
    if (props.showYearPicker) {
      const newDate = subYears(props.date, 1);
      props.handleDateChange(newDate);
    } else {
      props.decreaseMonth();
    }
  };

  const onNext = () => {
    if (props.showYearPicker) {
      const newDate = addYears(props.date, 1);
      props.handleDateChange(newDate);
    } else {
      props.increaseMonth();
    }
  };

  return (
    <div className={styles.header}>
      <div className="flex flex-col mx-[12px] text-left">
        <span className={styles.magicText}>Text</span>
        <span className={styles.currMonth}>
          {shortMonth}, {year}
        </span>
      </div>
      <div className={styles.row}>
        <img src={LeftArrowIcon} className="cursor-pointer" onClick={onPrev} />
        <span
          className="text-[16px] font-normal cursor-pointer"
          onClick={props.toggleYearPicker}
        >
          {props.showYearPicker ? year : `${month}, ${year}`}
        </span>
        <img src={RightArrowIcon} className="cursor-pointer" onClick={onNext} />
      </div>
    </div>
  );
};

export default Header;
