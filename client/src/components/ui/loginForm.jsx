import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, login } from "../../store/users";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    stayOn: false,
  });
  const loginError = useSelector(getAuthErrors());
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfog = {
    email: {
      isRequired: {
        message: "E-mail is required",
      },
    },
    password: {
      isRequired: {
        message: "Password is required",
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfog);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const redirect = history.location.state
      ? history.location.state.from.pathname
      : "/";

    dispatch(login({ payload: data, redirect }));
  };
  return (
    <>
      <div className="w-full max-w-xs m-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
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
          <CheckBoxField
            value={data.stayOn}
            onChange={handleChange}
            name="stayOn"
          >
            Stay in system
          </CheckBoxField>
          {loginError && <p className="text-danger">{loginError}</p>}

          <button
            type="submit"
            disabled={!isValid}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
