import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

export type DatePickerHeaderProps = ReactDatePickerCustomHeaderProps & {
  toggleYearPicker?: () => void;
  handleDateChange: (date: Date) => void;
  showYearPicker?: boolean;
};
