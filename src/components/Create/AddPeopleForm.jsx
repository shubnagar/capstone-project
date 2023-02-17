import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./Create.module.css";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  phone: yup.string().required().max(10).min(10),
});

const AddPeopleForm = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });

  return (
    <section
      className={`flexCenter flexDirectionColumn ${styles.formContainer}`}
    >
      <h3>Add People Form</h3>
      <form
        className={styles.createForm}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          placeholder="Name"
          className={styles.createInput}
          {...register("name")}
        />
        <p className={styles.errors}>{errors.name?.message}</p>
        <input
          placeholder="Email"
          className={styles.createInput}
          {...register("email")}
        />
        <p className={styles.errors}>{errors.email?.message}</p>
        <input
          placeholder="Username"
          className={styles.createInput}
          {...register("username")}
        />
        <p className={styles.errors}>{errors.username?.message}</p>
        <input
          placeholder="Phone Number"
          type="number"
          className={styles.createInput}
          {...register("phone")}
        />
        <p className={styles.errors}>{errors.phone?.message}</p>
        <input className={`marginTop10 ${styles.addButton}`} type="submit" />
      </form>
    </section>
  );
};

export default AddPeopleForm;
