import styles from "./App.module.scss";
import PasswordInput from "Component/PasswordInput";
import CustomDatePicker from "Component/CustomDatePicker";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h2>Password Input</h2>
        <PasswordInput />
      </div>
      <div className={styles.wrap}>
        <h2>Date Picker</h2>
        <CustomDatePicker />
      </div>
    </div>
  );
};

export default App;
