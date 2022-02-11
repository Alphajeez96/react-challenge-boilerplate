import styled from "styled-components";
import { SideBar } from "../Partials/sidebar";
import { Navbar } from "../Partials/navbar";

const Layout = styled.div`
  display: flex;
  height: 100%;

  .sidebar {
    position: fixed;
    z-index: 10;
  }

  .content-area {
    flex-grow: 1;
    width: 70%;
    background-color: #f4f6f8;
  }
`;

const navProps = {
  title: "Transactions",
};
export const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      {/* SideBar here */}
      <div>
        <div className="sidebar">
          {" "}
          <SideBar />
        </div>

        <div>
          {" "}
          <SideBar />
        </div>
      </div>

      {/* Content Here */}
      <div className="content-area">
        <Navbar {...navProps} />

        {children}
      </div>
    </Layout>
  );
};
