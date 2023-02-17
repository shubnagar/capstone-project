import React from "react";
import styles from "./Layout.module.css";
import {
  useIsEditable,
  useSetIsEditable,
} from "../../../context/SwitchModeContext";

const SwitchButton = () => {
  const isEditable = useIsEditable();
  const setIsEditable = useSetIsEditable();

  return (
    <div
      onClick={() => setIsEditable(!isEditable)}
      className={`${styles.switchButtonContainer} ${
        isEditable ? styles.switchon : ""
      }`}
    >
      <div className={styles.circle} />
    </div>
  );
};

export default SwitchButton;
