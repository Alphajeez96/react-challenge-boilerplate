import { createGlobalStyle } from "styled-components";
import { FormWrapper, LogoWrapper, FooterWrapper } from "./login-style";
import { Button } from "../Button/button";
import logo from "../../assets/primer-logo.svg";
import emailIcon from "../../assets/email.svg";
import passwordIcon from "../../assets/password.svg";

// SHould be moved to the route page handling the login
const LoginGlobalStyle = createGlobalStyle`
  body {
    /* background: #F0F8FF; */
    background: rgb(244, 244, 244);
    /* background: red; */
  }
`;

const ButtonProps = {
  title: "Login To Dashboard",
  style: {},
};

const LoginForm = () => {
  return (
    <>
      <LoginGlobalStyle />

      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>

      {/* Form Wrapper here */}
      <FormWrapper>
        <div>
          <p>LOGIN HERE</p>

          <form>
            {/* Email Input here */}
            <div className="form-group">
              <img src={emailIcon} alt="email-icon" />
              <input
                type="email"
                value="primer.candidate@primer.test"
                placeholder="Username"
                readOnly
              />
            </div>

            {/* Password Input here */}
            <div className="form-group">
              <img src={passwordIcon} alt="email-icon" />
              <input
                type="password"
                value="Candidate1234"
                placeholder="Password"
                readOnly
              />
            </div>

            {/* Submit Button here */}
            <div className="submit-button">
              <Button {...ButtonProps} />
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

export default LoginForm;
