import React, { useState } from "react";
import { listData } from "../../../constant/config";
import Card from "./Card";
import styles from "./Card.module.css";

const CardList = () => {
  const [data, setData] = useState(listData);

  function editAmountValue(id, amount) {
    const newData = [...data];
    const findIndex = newData.findIndex((i) => i.id === id);
    if (findIndex === -1) return;
    newData[findIndex].amount = amount;
    setData(newData);
  }

  return (
    <section className={styles.listContainer}>
      {data.map((item) => (
        <Card key={item.id} item={item} editAmountValue={editAmountValue} />
      ))}
    </section>
  );
};

export default CardList;
