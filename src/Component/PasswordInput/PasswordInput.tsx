import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "Component/Input";
import checkIcon from "Asset/check.svg";
import uncheckIcon from "Asset/uncheck.svg";

import styles from "./styles.module.scss";
import * as types from "./types";

const PasswordInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().test("password strength", "", (value) => {
        let errors: string[] = [];

        const pwd = value || "";

        if (!pwd || pwd.length < 8) {
          errors.push(types.PasswordValidation.MinLength);
        }

        if (!/[A-Z]/.test(pwd)) {
          errors.push(types.PasswordValidation.Uppercase);
        }

        if (!/[a-z]/.test(pwd)) {
          errors.push(types.PasswordValidation.Lowercase);
        }

        if (!/[0-9]/.test(pwd)) {
          errors.push(types.PasswordValidation.Number);
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
          errors.push(types.PasswordValidation.SpecialChar);
        }

        if (errors.length > 0) {
          return new Yup.ValidationError(errors.join(", "), null, "password");
        }

        return true;
      }),
    }),
    onSubmit: (values) => console.log("passwordInput", values),
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  const validationKeys = [
    types.PasswordValidation.Uppercase,
    types.PasswordValidation.Lowercase,
    types.PasswordValidation.Number,
    types.PasswordValidation.SpecialChar,
    types.PasswordValidation.MinLength,
  ];

  return (
    <div className={styles.container}>
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <div className={styles.errorList}>
          {validationKeys.map((validation) => {
            const isError = formik.errors.password?.includes(validation);

            return (
              <div key={validation} className={styles.errorItem}>
                <img
                  className={styles.icon}
                  src={isError ? uncheckIcon : checkIcon}
                />
                {validation}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
