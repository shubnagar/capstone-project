import React from "react";
import styles from "./Card.module.css";
import { FaAccessibleIcon } from "react-icons/fa";
import CardInput from "./CardInput";

const CardContent = ({ amount, editAmountValue, id }) => {
  return (
    <div className={`displayFlex alignItemCenter ${styles.cardContent}`}>
      <FaAccessibleIcon className="font22" />
      <CardInput amount={amount} editAmountValue={editAmountValue} id={id} />
    </div>
  );
};

export default CardContent;
