import styles from "./App.module.scss";
import PasswordInput from "Component/PasswordInput/PasswordInput";

const App = () => {
  return (
    <div className={styles.container}>
      <PasswordInput />
    </div>
  );
};

export default App;
