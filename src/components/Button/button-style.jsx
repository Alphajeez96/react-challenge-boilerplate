import styled from "styled-components";

export const ButtonWrapper = styled.button`
  cursor: pointer;
  height: 3rem;
  background: ${({ background, theme }) =>
    background ? background : theme.colors.primary};
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border-radius: 3px;
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  border: none;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};

  &:focus {
    outline: none;
  }
`;
