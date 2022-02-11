import styled from "styled-components";

export const TableWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(174, 174, 192, 0.2);
  border: 1px solid #e7eaed;
  border-radius: 3px;
  margin-top: 1rem;

  div.filter-holder {
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    height: 62px;

    p.table-caption {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #7c8191;
      font-weight: 500;
      width: 15%;
    }

    .search-holder {
      position: relative;
      width: 30%;

      img {
        position: absolute;
        top: 8px;
        left: 12px;
      }

      .search-control {
        background: #f5f5f5 0 0 no-repeat padding-box;
        border-radius: 3px;
        height: 30px;
        width: 100%;
        border: none;
        padding: 0 2.5rem;
        font-size: 0.875rem;

        &::placeholder {
          color: #262626;
          font-weight: 400;
          font-size: 0.938rem;
          opacity: 0.3;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;

    thead th {
      border-top: 1px solid #e7eaed;
      border-bottom: 1px solid #e7eaed;
      color: #262626;
      font-weight: 500;
      font-size: 0.875rem;
      text-align: left;
      padding: 1rem 1.25rem;
      background: #fbfcfc;
    }

    tbody td {
      border-bottom: 1px solid #f3f4f6;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 1rem 1.25rem;
      color: #74787c;
      cursor: pointer;

      &.currency {
        color: #2843b4;
        font-weight: 500;

        span {
          font-weight: 400;
        }
      }

      .image-holder {
        height: 24px;
        width: 24px;
        display: flex;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;

          &:nth-child(2) {
            margin-left: 10px;
          }
        }
      }
    }

    tbody tr:hover {
      background: #fbfcfc;
    }
  }
`;
