import { DashboardLayout } from "../components/Layouts/dashboard";
import { Button } from "../components/Button/button";
import { Card } from "../components/card";
import { Pill } from "../components/pill";
import { useEffect, useState } from "react";
import { getSingleTransaction } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate, formatCurrency } from "../utils/utilities";
import { TransactionWrapper, ButtonWrapper, CardWrapper } from "./style";
export const SingleTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await getSingleTransaction(id);

      if (response.isSuccess) {
        setData(response.data);
      }

      setLoading(false);
    };

    getData();
  }, [data, id]);

  const getExpiration = (data) => {
    if (!data) return "nil";
    return `${data.expirationMonth}/${data.expirationYear}`;
  };
  const get3dStatus = (data) => {
    if (!data) return "";

    switch (data.responseCode) {
      case "NOT_PERFORMED":
        return "Not Performed";

      default:
        return "Performed";
    }
  };

  return (
    <DashboardLayout>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <TransactionWrapper>
          {/* Buttons Here */}
          <ButtonWrapper>
            <div
              onClick={() => {
                navigate(-1);
              }}
            >
              <Button
                {...{
                  style: {
                    width: "5rem",
                    background: "#dadee2",
                    height: "2.125rem",
                    color: "#393C40",
                    fontSize: "0.813rem",
                  },
                  title: "BACK",
                }}
              ></Button>
            </div>

            <div
              className="left"
              onClick={() => {
                window.location.reload();
              }}
            >
              <Button
                {...{
                  style: {
                    width: "6rem",
                    background: "#2843B4",
                    height: "2.125rem",
                    color: "white",
                    fontSize: "0.813rem",
                  },
                  title: "RE-QUERY",
                }}
              ></Button>
            </div>
          </ButtonWrapper>

          {/* Cards */}
          <CardWrapper>
            <div className="top">
              {/* Transaction Deets */}
              <div className="info">
                <Card>
                  {/* Header Here */}
                  <div className="card-header">
                    <p>Transaction Information</p>

                    <div>
                      {" "}
                      <Pill title={data.status} />
                    </div>
                  </div>

                  <div className="border-t" />

                  <div className="display">
                    <div className="deets">
                      <div>
                        <p>Your reference</p>
                        <p>{data.id ?? "nil"}</p>
                      </div>
                    </div>

                    {/*  Date */}
                    <div className="deets">
                      <div>
                        <p>Submitted</p>
                        <p>{data.date ? formatDate(data?.date) : "nil"}</p>
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="deets">
                      <div>
                        <p>Amount</p>
                        <p>
                          {data.currencyCode && data.amount
                            ? data.currencyCode +
                              " " +
                              formatCurrency(data?.amount ?? 0)
                            : "nil"}
                        </p>
                      </div>
                    </div>

                    {/* Processor */}
                    <div className="deets">
                      <div>
                        <p>Processor</p>
                        <p>{data.processor ?? "nil"}</p>
                      </div>
                    </div>

                    {/* Refund */}
                    {data.amountRefunded > 0 ? (
                      <div className="deets">
                        <div>
                          <p>Refund</p>
                          <p>
                            {data.currencyCode +
                              " " +
                              formatCurrency(data?.amountRefunded ?? 0)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Card>

                {/* 3D Secure  */}
                {data &&
                data.paymentInstrument &&
                data.paymentInstrument.threeDSecureAuthentication ? (
                  <div className="info ml">
                    <Card>
                      {/* Header Here */}
                      <div className="card-header">
                        <img
                          src={require(`../assets/3DS.svg`).default}
                          alt={data?.processor}
                        />

                        <p>3DSecure</p>
                      </div>

                      <div className="border-t" />

                      <div className="display">
                        {/* Cardholder Name */}
                        <div className="deets">
                          <div>
                            <p>Response</p>
                            <Pill
                              title={get3dStatus(
                                data?.paymentInstrument
                                  ?.threeDSecureAuthentication
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* Processor Deets */}
              <div className="info">
                <Card>
                  {/* Header Here */}

                  <div className="card-header ">
                    {data && data.processor ? (
                      <img
                        src={
                          require(`../assets/${data.processor.toLowerCase()}.svg`)
                            .default
                        }
                        alt={data?.processor}
                      />
                    ) : (
                      ""
                    )}

                    <p>Processor</p>
                  </div>

                  <div className="border-t" />

                  <div className="display">
                    {/*  Account ID */}
                    <div className="deets">
                      <div>
                        <p>Account ID</p>
                        <p>{data?.processorMerchantId ?? "nil"}</p>
                      </div>
                    </div>

                    {/*  Transaction ID */}
                    <div className="deets">
                      <div>
                        <p>Transaction ID</p>
                        <p>{data.paymentInstrument?.token ?? "nil"}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Payment Method  */}
                {data && data.processor && data.processor !== "PAYPAL" ? (
                  <div className="info ml">
                    <Card>
                      {/* Header Here */}
                      <div className="card-header">
                        <img
                          src={require(`../assets/amex.svg`).default}
                          alt={data?.processor}
                        />
                        <p>Payment Method</p>
                      </div>

                      <div className="border-t" />

                      <div className="display">
                        {/* Cardholder Name */}
                        <div className="deets">
                          <div>
                            <p>Cardholder Name</p>
                            <p>
                              {data.paymentInstrument?.paymentInstrumentData
                                ?.cardholderName ?? "nil"}
                            </p>
                          </div>
                        </div>

                        {/* Card Deets */}
                        <div className="deets card">
                          <div>
                            <p>Card Number</p>
                            <p>
                              {" "}
                              {data.paymentInstrument?.paymentInstrumentData
                                ?.last4Digits ?? "nil"}
                            </p>
                          </div>

                          <div className="ml">
                            <p>Expiration</p>
                            <p>
                              {" "}
                              {getExpiration(
                                data.paymentInstrument?.paymentInstrumentData
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </CardWrapper>
        </TransactionWrapper>
      )}
    </DashboardLayout>
  );
};
