import styled from "styled-components";

const AppWrapper = styled.button`
  color: blue;
  display: flex;
  align-items: center;
  border: 1px solid red;
  border-radius: 6px;
  text-align: center;
  height: 40px;
`;

const Button = () => {
  return <AppWrapper>Okay</AppWrapper>;
};

export default Button;
