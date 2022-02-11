import { ButtonWrapper } from "./button-style";
import spinner from "../../assets/spinner.svg";
export const Button = ({ style, title, type, loading, disabled }) => {
  return (
    <ButtonWrapper
      role="button"
      type={type ? type : "submit"}
      {...style}
      disabled={loading || disabled}
    >
      {loading ? (
        <img src={spinner} alt="spinner" className="btn-spinner" />
      ) : (
        title
      )}
    </ButtonWrapper>
  );
};
