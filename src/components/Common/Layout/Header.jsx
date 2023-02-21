import React from "react";
import {
  useIsEditable,
  useSetIsEditable,
} from "../../../context/SwitchModeContext";
import styles from "./Layout.module.css";
import SwitchButton from "./SwitchButton";
import { FaRegEdit, FaMoon, FaSun } from "react-icons/fa";
import { useCurrentTheme, useSetTheme } from "../../../context/ThemeContext";

const Header = () => {
  const isEditable = useIsEditable();
  const setIsEditable = useSetIsEditable();
  const currentTheme = useCurrentTheme();
  const toggleCurrentTheme = useSetTheme();

  return (
    <header id="header" className={`width100Per ${styles.headerContainer}`}>
      <h3 className="font22">Context Playground</h3>
      <div className="displayFlex alignItemCenter">
        <SwitchButton
          value={isEditable}
          set={setIsEditable}
          icon={<FaRegEdit />}
        />
        <SwitchButton
          value={currentTheme === "dark"}
          set={toggleCurrentTheme}
          icon={currentTheme === "dark" ? <FaMoon /> : <FaSun />}
        />
      </div>
    </header>
  );
};

export default Header;
