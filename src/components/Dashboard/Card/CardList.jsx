import React, { useState } from "react";
import {
  FaCheckCircle,
  FaDollarSign,
  FaUserTie,
  FaUserClock,
} from "react-icons/fa";
import Card from "./Card";
import styles from "./Card.module.css";

const listData = [
  {
    id: 1,
    name: "Account Balance",
    amount: 30211.28,
    icon: FaUserTie,
  },
  {
    id: 2,
    name: "Pending",
    amount: -3021,
    icon: FaUserClock,
  },
  {
    id: 3,
    name: "Processes",
    amount: 10261.8,
    icon: FaCheckCircle,
  },
  {
    id: 4,
    name: "Net Worth",
    amount: 100007,
    icon: FaDollarSign,
  },
];

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
