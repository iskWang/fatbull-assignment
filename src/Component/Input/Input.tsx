import cx from "classnames";
import * as types from "./types";

import styles from "./styles.module.scss";

const Input = ({ className, ...props }: types.InputTypes) => {
  return (
    <div className={cx(styles.container, className)}>
      <legend>{props.name}</legend>
      <input {...props} />
    </div>
  );
};

export default Input;
