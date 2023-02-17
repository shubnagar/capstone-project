import React, { useState } from "react";
import AddPeopleForm from "./AddPeopleForm";
import styles from "./Create.module.css";

const AddPeople = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section>
      {isFormVisible ? (
        <AddPeopleForm />
      ) : (
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className={styles.addButton}
        >
          Add People
        </button>
      )}
    </section>
  );
};

export default AddPeople;
