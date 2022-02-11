import styled from "styled-components";
import { Table } from "../components/Table/table";
import { useEffect, useState } from "react";
import { fetchTransactions } from "../services/api";
import { DashboardLayout } from "../components/Layouts/dashboard";

const TransactionWrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const header = [
  "Reference",
  "Amount",
  "Status",
  "",
  "Processor",
  "Customer",
  "Date",
];
export const Transactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await fetchTransactions();

      if (response.isSuccess) {
        setData(response.data?.data);
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <DashboardLayout>
      <TransactionWrapper>
        <Table
          {...{
            header,
            data,
            loading,
          }}
        />
      </TransactionWrapper>
    </DashboardLayout>
  );
};
