import { Pill } from "../pill";
import { formatCurrency, formatDate } from "../../utils/utilities";
import { TableWrapper } from "./table-style";
import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";
export const Table = ({ data, header, loading }) => {
  const [searchQuery, setQuery] = useState("");
  const [searchParam] = useState(["id"]);
  const navigate = useNavigate();
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) > -1
        );
      });
    });
  }

  const handleRoute = (id) => {
    navigate(`/transactions/${id}`);
  };

  return (
    <TableWrapper>
      {loading ? (
        <div className="loader"></div>
      ) : data.length ? (
        <div>
          {/* Table Header Region here */}
          <div className="filter-holder">
            <p className="table-caption">
              {search(data).length}{" "}
              {search(data).length > 1 ? "Transactions" : "Transaction"}
            </p>

            <div className="search-holder">
              <img src={searchIcon} alt="search" />
              <input
                type="text"
                value={searchQuery}
                placeholder="Search references"
                className="search-control"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Table Here */}
          <table>
            <thead>
              <tr>
                {header.map((item, i) => (
                  <th key={i}>{item}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {search(data).map((transaction) => {
                return (
                  <tr
                    key={transaction.id}
                    onClick={() => handleRoute(transaction?.id)}
                  >
                    <td>{transaction.id}</td>
                    <td className="currency">
                      {formatCurrency(transaction.amount)}{" "}
                      <span> {transaction.currencyCode}</span>
                    </td>
                    <td>
                      <Pill title={transaction.status} />
                    </td>
                    <td>{transaction.amountRefunded > 0 ? "Refunded" : ""}</td>
                    <td>
                      <div className="image-holder">
                        <img
                          src={
                            require(`../../assets/${transaction.processor.toLowerCase()}.svg`)
                              .default
                          }
                          alt={transaction.processor}
                        />

                        <img
                          src={require(`../../assets/amex.svg`).default}
                          alt={transaction.processor}
                        />
                      </div>
                    </td>

                    <td>{transaction.customer?.email ?? ""}</td>
                    <td>{formatDate(transaction.date)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="nothing">
          <p>No data found</p>
        </div>
      )}
    </TableWrapper>
  );
};
