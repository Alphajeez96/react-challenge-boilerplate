import { SideBarWrapper } from "./sidebar-style";
import company from "../../assets/company.svg";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../utils/nav-routes";
import { getUser } from "../../services/api";
import { useEffect, useState } from "react";

export const SideBar = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const response = await getUser();

      if (response.isSuccess) {
        setUser(response.data);
      }
    };

    getUserData();
  }, []);

  return (
    <SideBarWrapper>
      <main>
        <nav>
          <div className="company-holder">
            {/* Company Logo here */}
            <div className="image-holder">
              <img src={company} alt="company" />
            </div>

            <p className="name">{user.companyName}</p>
          </div>
          <div className="hr" />

          {/* Routes Here */}
          <div className="routes">
            <ul>
              <li>
                <Link to="/transactions">
                  <img
                    src={require(`../../assets/${"ic-overview"}.svg`).default}
                    alt="overview"
                  />
                  Overview
                </Link>
              </li>

              {/* Business Routes Here */}
              <div>
                <p className="business">YOUR BUSINESS</p>
                {routes.business.map((route, i) => (
                  <li key={i}>
                    <Link to="/transactions">
                      <img
                        src={
                          require(`../../assets/${
                            "ic-" + route.toLowerCase()
                          }.svg`).default
                        }
                        alt={route}
                      />
                      {route}
                    </Link>
                  </li>
                ))}
              </div>

              {/* Customers Routes Here */}
              <div>
                <p className="business">Customers</p>
                {routes.customers.map((route, i) => (
                  <li key={i}>
                    <Link to="/transactions">
                      <img
                        src={
                          require(`../../assets/${
                            "ic-" + route.toLowerCase()
                          }.svg`).default
                        }
                        alt={route}
                      />
                      {route}
                    </Link>
                  </li>
                ))}
              </div>

              {/* Seller Tools Routes Here */}
              <div>
                <p className="business">Seller tools</p>
                {routes.sellerTools.map((route, i) => (
                  <li key={i}>
                    <Link to="/transactions">
                      <img
                        src={
                          require(`../../assets/${
                            "ic-" + route.toLowerCase()
                          }.svg`).default
                        }
                        alt={route}
                      />
                      {route}
                    </Link>
                  </li>
                ))}
              </div>

              {/* Tools Routes Here */}
              <div>
                <p className="business">Tools</p>
                {routes.tools.map((route, i) => (
                  <li key={i}>
                    <Link to="/transactions">
                      <img
                        src={
                          require(`../../assets/${
                            "ic-" + route.toLowerCase()
                          }.svg`).default
                        }
                        alt={route}
                      />
                      {route}
                    </Link>
                  </li>
                ))}
              </div>

              <p
                className="log-out"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/");
                }}
              >
                LOGOUT
              </p>
            </ul>
          </div>
        </nav>
      </main>
    </SideBarWrapper>
  );
};
