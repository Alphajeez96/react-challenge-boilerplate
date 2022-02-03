import { ButtonWrapper } from "./button-style";
export const Button = ({ style, title }) => {
  return <ButtonWrapper {...style}>{title}</ButtonWrapper>;
};
