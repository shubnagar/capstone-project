import React, { useEffect, useRef, useState } from "react";
import { useIsEditable } from "../../../context/SwitchModeContext";
import styles from "./Card.module.css";
import { FaCheckCircle } from "react-icons/fa";

const CardInput = ({ amount, editAmountValue, id }) => {
  const isEditable = useIsEditable();
  const [startEditing, setStartEditing] = useState(false);

  const inputRef = useRef(null);

  function handleSubmit() {
    editAmountValue(id, inputRef.current.value);
    setStartEditing(false);
  }

  useEffect(() => {
    if (!isEditable && startEditing) {
      setStartEditing(false);
    } else if (inputRef.current) {
      inputRef.current.value = amount;
    }
  }, [startEditing, inputRef, amount, isEditable]);

  return startEditing ? (
    <>
      <input
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className={styles.cardinput}
        type="number"
        ref={inputRef}
      />
      <FaCheckCircle onClick={handleSubmit} className="font30 marginLeft10" />
    </>
  ) : (
    <h3
      onClick={() => isEditable && setStartEditing(true)}
      className={`marginLeft10 ${isEditable ? "cursorPointer" : ""}`}
    >
      ${amount}
    </h3>
  );
};

export default CardInput;
