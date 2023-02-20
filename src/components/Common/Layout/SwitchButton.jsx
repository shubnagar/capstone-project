import React from "react";
import styles from "./Layout.module.css";

const SwitchButton = ({ value, set, icon }) => {
  return (
    <div
      onClick={() => set(!value)}
      className={`${styles.switchButtonContainer} ${
        value ? styles.switchon : ""
      }`}
    >
      <div className={`flexCenter ${styles.circle}`}>{icon}</div>
    </div>
  );
};

export default SwitchButton;
