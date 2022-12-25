import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    licence: false,
    isAdmin: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    name: {
      isRequired: {
        message: "Name is required",
      },
      min: {
        message: "Name must be minimum of three characters",
        value: 3,
      },
    },
    email: {
      isRequired: {
        message: "E-mail is required",
      },
      isEmail: {
        message: "E-mail is incorrect",
      },
    },
    password: {
      isRequired: {
        message: "Password is required",
      },
      isCapitalSymbol: {
        message: "Password must have minimum one capital case letter",
      },
      isContainDigit: {
        message: "Password must have minimum one number",
      },
      min: {
        message: "Password must have minimum 8 carachters",
        value: 8,
      },
    },
    phone: {
      isRequired: {
        message: "Phone number is required",
      },
    },
    licence: {
      isRequired: {
        message: "You can not use our service with no lisence accepting",
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(signUp(data));
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="E-mail"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />

        <TextField
          label="Phone number"
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <CheckBoxField
          value={data.licence}
          onChange={handleChange}
          name="licence"
          error={errors.licence}
        >
          Accept <a>lisence agreement</a>
        </CheckBoxField>
        <button
          type="submit"
          disabled={!isValid}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
