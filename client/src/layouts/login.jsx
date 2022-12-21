import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
  const { type } = useParams();

  console.log(type);
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <h3 className="mb-4 text-center font-bold">Register</h3>
              <RegisterForm />
              <p className="mt-4 text-center">
                Already have account?{" "}
                <a
                  className="text-blue-500 hover:underline"
                  role="button"
                  onClick={toggleFormType}
                >
                  {" "}
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4 text-center font-bold">Login</h3>
              <LoginForm />
              <p className="mt-4 text-center">
                Dont have account?{" "}
                <a
                  className="text-blue-500 hover:underline"
                  role="button"
                  onClick={toggleFormType}
                >
                  {" "}
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
