import { useState } from "react";
import cx from "classnames";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

import Input from "Component/Input";
import Header from "./Header";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

const DATE_FORMAT = "MM/dd/yyyy";

const CustomDatePicker = () => {
  const [isFocused, setIsFocused] = useState(false);

  const [tempDate, setTempDate] = useState<Date | null>();
  const [currDate, setCurrDate] = useState<Date | null>();
  const [showYearPicker, setShowYearPicker] = useState(false);

  const handleDateChange = (date: any) => {
    setCurrDate(date);
  };

  const handleOnCancel = () => {
    setCurrDate(tempDate);
    setShowYearPicker(false);
    setIsFocused(false);
  };

  const handleOnOK = () => {
    setTempDate(currDate);
    setShowYearPicker(false);
    setIsFocused(false);
  };

  const toggleYearPicker = () => {
    setShowYearPicker(!showYearPicker);
  };

  const _dayClassName = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return styles.pastDate;
    return "";
  };

  return (
    <div className="relative">
      <Input
        name="Birthday"
        className="mb-[14px]"
        placeholder="mm/dd/yyyy"
        value={(tempDate && format(tempDate, DATE_FORMAT)) || ""}
        onFocus={() => {
          setIsFocused(true);
          setCurrDate(new Date());
        }}
      />
      <div
        className={cx(styles.pickerWrapper, {
          [styles.display]: isFocused,
        })}
      >
        <DatePicker
          selected={currDate}
          inline
          dayClassName={_dayClassName}
          onChange={handleDateChange}
          renderCustomHeader={(props) => (
            <Header
              {...props}
              handleDateChange={handleDateChange}
              toggleYearPicker={toggleYearPicker}
              showYearPicker={showYearPicker}
            />
          )}
          renderDayContents={(day, date) => {
            const _currDate = currDate && format(currDate, DATE_FORMAT);
            const _tempDate = tempDate && format(tempDate, DATE_FORMAT);
            const _date = format(date, DATE_FORMAT);

            return (
              <div
                className={cx(styles.day, _date, {
                  [styles.new]: _currDate === _date,
                  [styles.old]: _currDate !== _tempDate && _tempDate === _date,
                })}
              >
                {day}
              </div>
            );
          }}
          showYearPicker={showYearPicker}
          yearItemNumber={20}
          dateFormat={DATE_FORMAT}
        >
          <div className="w-[100%] px-[12px] inline-flex justify-end">
            <div
              className="cursor-pointer px-[16px] py-[8px]"
              onClick={handleOnCancel}
            >
              Cancel
            </div>
            <div
              className="cursor-pointer ml-[38px] px-[16px] py-[8px]"
              onClick={handleOnOK}
            >
              OK
            </div>
          </div>
        </DatePicker>
      </div>
    </div>
  );
};

export default CustomDatePicker;
