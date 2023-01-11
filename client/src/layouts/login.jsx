import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import mhotel_hero from "../assets/mhotel_hero.jpg";

const Login = () => {
  const { type } = useParams();

  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full mx-auto flex justify-center items-center py-16"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${mhotel_hero})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.65)",
        }}
      >
        <div>
          {formType === "register" ? (
            <>
              <h3 className="mb-4 text-center font-bold text-white">
                Register
              </h3>
              <RegisterForm />
              <p className="mt-4 text-center text-white">
                Already have account?{" "}
                <a
                  className="text-blue-300 hover:underline"
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
              <h3 className="mb-4 text-center font-bold text-white">Login</h3>
              <LoginForm />
              <p className="mt-4 text-center text-white">
                Dont have account?{" "}
                <a
                  className="text-blue-300 hover:underline"
                  role="button"
                  onClick={toggleFormType}
                >
                  {" "}
                  Sign Up
                </a>
              </p>
            </>
          )}
          <p className="mb-4 text-center text-white">
            {" "}
            Back to{" "}
            <Link to="/" className="text-blue-300 hover:underline">
              Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
