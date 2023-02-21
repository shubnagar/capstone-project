import React, { useState } from "react";
import { routeData } from "../../../constant/routeData";
import styles from "./Navbar.module.css";
import {
  FaHome,
  FaUserFriends,
  FaChartLine,
  FaPlus,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import NavItem from "./NavItem";

export function Icon({ name, ...rest }) {
  switch (name) {
    case "Dashboard":
      return <FaHome {...rest} />;
    case "Teams":
      return <FaUserFriends {...rest} />;
    case "Create":
      return <FaPlus {...rest} />;
    case "Charts":
      return <FaChartLine {...rest} />;
    default:
      return <FaHome {...rest} />;
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.navbarContainer} ${isOpen ? styles.navOpen : ""}`}
      data-testid="nav_parent"
    >
      <section className="width100Per">
        {routeData.map((route) => (
          <NavItem key={route.id} route={route} />
        ))}
      </section>
      <button
        className={styles.togglebutton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaAngleDoubleLeft className="font22"/>
      </button>
    </nav>
  );
};

export default Navbar;
