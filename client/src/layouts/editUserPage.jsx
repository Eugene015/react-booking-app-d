import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import TextField from "../components/common/form/textField";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserData, updateUser } from "../store/users";
import { useHistory } from "react-router-dom";

const EditUserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [data, setData] = useState("");
  const currentUser = useSelector(getCurrentUserData());
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(updateUser(data));
  };

  const validatorConfog = {
    email: {
      isRequired: {
        message: "E-mail is required",
      },
      isEmail: {
        message: "E-mail is incorrect",
      },
    },

    name: {
      isRequired: {
        message: "Enter your name",
      },
    },
  };
  useEffect(() => validate(), [currentUser]);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validate = () => {
    const errors = validator(data, validatorConfog);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleClickToPrevious = () => {
    history.push(`/users/${currentUser._id}`);
  };

  return (
    <div className="mt-5 max-w-[50%] m-auto">
      <button className="main mt-6 mb-2" onClick={handleClickToPrevious}>
        Back
      </button>
      <p className="pb-6 font-bold">
        You can change your current data in the form below
      </p>
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form onSubmit={handleSubmit}>
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
              label="Phone number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <button
              type="submit"
              disabled={!isValid}
              className="main mt-6 mb-2"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserPage;
