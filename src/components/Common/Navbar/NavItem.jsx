import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./Navbar";
import styles from "./Navbar.module.css";

const NavItem = ({ route }) => {
  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? { backgroundColor: "var(--selected-color)" } : undefined
      }
      className={styles.navlink}
      key={route.id}
      to={route.path}
    >
      <Icon name={route.name} className="font22" />
      <h4 className={styles.linkname}>{route.name}</h4>
    </NavLink>
  );
};

export default NavItem;
