import styled from "styled-components";
import avatar from "../../assets/profile.svg";
import notification from "../../assets/notification.svg";

const NavbarWrapper = styled.nav`
  background: #fff;
  border: 1px solid #dadee2;
  height: 4.75rem;
  padding: 0 1.5rem;

  div {
    display: flex;
    align-items: center;
    height: 100%;

    h1 {
      color: #464646;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .nav-actions {
      margin-left: auto;
      display: flex;
      align-items: center;

      .border-left {
        border-left: 1px solid #dadee2;
        height: 70px;
        margin: 0 1.5rem;
      }
    }
  }
`;
export const Navbar = ({ title }) => {
  return (
    <NavbarWrapper>
      <div>
        <h1>{title}</h1>

        <div className="nav-actions">
          {/* Notifications Here */}
          <div>
            <div className="border-left"></div>
            <img src={notification} alt="avatar" />
          </div>

          {/* Profile Region Here */}
          <div>
            <div className="border-left"></div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};
