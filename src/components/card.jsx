import styled from "styled-components";

const CardWrapper = styled.div`
  background: #fff;
  box-shadow: 0 1px 5px rgb(63 63 68 / 10%);
  border: 1px solid #e7eaed;
  border-radius: 3px;
`;
export const Card = ({ style, children }) => {
  return <CardWrapper style={style}>{children}</CardWrapper>;
};
