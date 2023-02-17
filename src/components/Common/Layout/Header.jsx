import React from "react";
import styles from "./Layout.module.css";
import SwitchButton from "./SwitchButton";

const Header = () => {
  return (
    <header className={`width100Per ${styles.headerContainer}`}>
      <h3 className="font22">Context Playground</h3>
      <div className="displayFlex alignItemCenter">
        <h3 className="font22">Edit Mode</h3>
        <SwitchButton />
      </div>
    </header>
  );
};

export default Header;
