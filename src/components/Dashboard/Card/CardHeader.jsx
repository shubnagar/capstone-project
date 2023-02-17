import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import styles from "./Card.module.css";

const CardHeader = ({ title }) => {
  return (
    <div
      className={`displayFlex justifyContentSpaceBetween ${styles.cardHeader}`}
    >
      <h3>{title}</h3>
      <FaExpandArrowsAlt className="font22" />
    </div>
  );
};

export default CardHeader;
