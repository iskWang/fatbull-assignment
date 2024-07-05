import { InputHTMLAttributes } from "react";

export type InputTypes = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};
