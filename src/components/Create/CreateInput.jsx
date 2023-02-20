import React from "react";
import styles from "./Create.module.css";

const CreateInput = ({ errorMsg, register, ...props }) => {
  return (
    <>
      <input className={styles.createInput} {...register} {...props} autoComplete="off"/>
      <p className={styles.errors}>{errorMsg}</p>
    </>
  );
};

export default CreateInput;
