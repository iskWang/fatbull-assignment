import cx from "classnames";
import * as types from "./types";

import styles from "./styles.module.scss";

const Input = (props: types.InputTypes) => {
  return (
    <div className={cx(styles.container, props.className)}>
      <legend>{props.name}</legend>
      <input {...props} />
    </div>
  );
};

export default Input;
