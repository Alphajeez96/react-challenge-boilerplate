import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.5rem 0;
  height: 5vh;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    background: #fbfcfc;
    box-shadow: 0 1px 5px rgb(63 63 68 / 10%);
    border-radius: 4px;
    width: 435px;
    padding: 1.5rem;

    & > p {
      font-weight: 500;
      font-size: 1rem;
      padding-top: 0.5rem;
    }

    & > form {
      margin-top: 2rem;

      div.form-group {
        margin-bottom: 1.25rem;
        position: relative;

        img {
          position: absolute;
          left: 13px;
          top: 20px;
        }
      }

      input {
        width: 100%;
        background: #fff;
        border: 1px solid #dadee2;
        border-radius: 3px;
        height: 3.125rem;
        padding: 0 2.5rem;
        font-size: 1rem;

        &:focus {
          border: 1px solid #5171ef;
          outline: none;
        }
      }

      .submit-button {
        padding: 0.75rem 0;
      }
    }
  }
`;

export const FooterWrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  a.forgot-password {
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.blue};
    line-height: 1.25rem;
    font-weight: 500;
    text-decoration: none;
  }

  p.no-account {
    font-size: 0.813rem;
    color: #646a86;
    padding-top: 0.75rem;

    span > a {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
    }
  }

  div.foot-links {
    margin-top: rem;
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin: 4rem auto;

    a {
      font-size: 1rem;
      color: #b0b2b3;
      text-decoration: none;
      font-weight: normal;
    }
  }
`;
