import { FormWrapper, LogoWrapper, FooterWrapper } from "./login-style";
import { useFormik } from "formik";
import { loginUser } from "../../services/api";
import { Button } from "../Button/button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/primer-logo.svg";
import emailIcon from "../../assets/email.svg";
import passwordIcon from "../../assets/password.svg";
import { useState } from "react";

let ButtonProps = {
  title: "Login To Dashboard",
  style: {
    background: "#0b0b0b",
    color: "#fff",
  },
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // form Handler Here
  const formik = useFormik({
    initialValues: {
      username: "primer.candidate@primer.test",
      password: "Candidate1234",
      grant_type: "password",
    },

    onSubmit: async (payload) => {
      setLoading(true);
      const response = await loginUser(payload);

      if (response.isSuccess) {
        localStorage.setItem("accessToken", response.data?.accessToken);
        navigate("/transactions");
      }
      setLoading(false);
    },
  });

  return (
    <>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>

      {/* Form Wrapper here */}
      <FormWrapper>
        <div>
          <p>LOGIN HERE</p>

          <form onSubmit={formik.handleSubmit}>
            {/* Email Input here */}
            <div className="form-group">
              <img src={emailIcon} alt="email-icon" />
              <input
                id="username"
                type="email"
                inputMode="email"
                placeholder="Username"
                value={formik.values.username}
                readOnly
              />
            </div>

            {/* Password Input here */}
            <div className="form-group">
              <img src={passwordIcon} alt="email-icon" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                readOnly
              />
            </div>

            {/* Submit Button here */}
            <div className="submit-button">
              <Button {...ButtonProps} loading={loading} />
            </div>
          </form>
        </div>
      </FormWrapper>

      {/* Footer Region here */}
      <FooterWrapper>
        <a
          href="https://dashboard.primer.io/forgot-password"
          target="_blank"
          rel="noreferrer"
          className="forgot-password"
        >
          Forgot Password?
        </a>

        <p className="no-account">
          Don't have an account?{" "}
          <span>
            <a href="https://primer.io/docs/" target="_blank" rel="noreferrer">
              Create an account.
            </a>
          </span>
        </p>

        {/* Foot Links Here */}
        <div className="foot-links">
          <a
            href="https://primer.io/docs/what-is-primer"
            target="_blank"
            rel="noreferrer"
          >
            What is Primer ?
          </a>

          <a href="https://primer.io/terms/" target="_blank" rel="noreferrer">
            Terms
          </a>

          <a href="https://primer.io/privacy/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        </div>
      </FooterWrapper>
    </>
  );
};
