import styled from "styled-components";
import { capitalize } from "../utils/utilities";

// Background Color Handler here
const handleBackgroundColor = (title) => {
  switch (title.toLowerCase()) {
    case "settled":
      return "#D1F7C4";
    case "failed":
      return "#FFCDC7";
    case "settling":
      return "#ECEFF1";
    case "authorized":
      return "#D0F0FD";
    case "declined":
      return "#FCDEFF";
    case "cancelled":
      return "#FFCDC7";
    case "not performed":
      return "#ECEFF1";
    case "performed":
      return "#D1F7C4";
    default:
      return "#D0F0FD";
  }
};
// Text Color Handler here
const handleColor = (title) => {
  switch (title.toLowerCase()) {
    case "settled":
      return "#337138";
    case "failed":
      return "#5E0E03";
    case "settling":
      return "#7C8DB5";
    case "authorized":
      return "#335F71";
    case "declined":
      return "#4A0051";
    case "cancelled":
      return "#5E0E03";
    case "not performed":
      return "#7C8DB5";
    case "performed":
      return "#337138";
    default:
      return "#335F71";
  }
};

const PillWrapper = styled.div`
  height: 24px;
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 0 10px;
  background: ${({ title }) => (title ? handleBackgroundColor(title) : "#fff")};
  color: ${({ title }) => (title ? handleColor(title) : "#000")};
`;

export const Pill = ({ title }) => {
  return <PillWrapper {...{ title }}> {capitalize(title)} </PillWrapper>;
};
