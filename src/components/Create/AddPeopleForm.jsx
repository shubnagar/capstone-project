import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { addUserData } from "../../apiServices/query";
import {
  useYupValidationResolver,
  validationSchema,
} from "../../constant/config";
import styles from "./Create.module.css";
import CreateInput from "./CreateInput";

const AddPeopleForm = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched", resolver });

  const { mutate, isLoading } = useMutation((data) => addUserData(data));

  function handleFormSubmit(data) {
    mutate(
      { ...data, isPublic: true },
      {
        onSuccess: () => reset(),
      }
    );
  }

  return (
    <section
      className={`flexCenter flexDirectionColumn ${styles.formContainer}`}
    >
      <h3>Add People Form</h3>
      <form
        className={styles.createForm}
        onSubmit={handleSubmit(handleFormSubmit)}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        <CreateInput
          placeholder="Name"
          register={register("name")}
          errorMsg={errors.name?.message}
        />
        <CreateInput
          placeholder="Email"
          register={register("email")}
          errorMsg={errors.email?.message}
        />
        <CreateInput
          placeholder="Username"
          register={register("username")}
          errorMsg={errors.username?.message}
        />
        <CreateInput
          placeholder="Phone Number"
          type="number"
          register={register("phone")}
          errorMsg={errors.phone?.message}
        />
        <button
          disabled={isLoading}
          className={`marginTop10 ${styles.addButton}`}
        >
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </section>
  );
};

export default AddPeopleForm;
