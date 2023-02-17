import React from "react";
import CardHeader from "./CardHeader";
import styles from "./Card.module.css";
import CardInput from "./CardInput";

const Card = ({ item, editAmountValue }) => {
  return (
    <div className={styles.card}>
      <CardHeader title={item.name} />
      <div className={`displayFlex alignItemCenter ${styles.cardContent}`}>
        <item.icon className="font22" />
        <CardInput
          amount={item.amount}
          editAmountValue={editAmountValue}
          id={item.id}
        />
      </div>
    </div>
  );
};

export default Card;
