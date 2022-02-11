import styled from "styled-components";

export const TransactionWrapper = styled.div`
  padding: 1rem 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;

  div.left {
    margin-left: 0.875rem;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 1.5rem;

  div.top {
    display: flex;
    justify-content: space-between;
  }

  div.info {
    width: 49%;

    &.ml {
      width: 100%;
      margin-top: 1rem;
    }

    .card-header {
      display: flex;
      padding: 0.75rem 1.25rem;

      img {
        margin-right: 10px;
      }

      p {
        color: #1b1c1d;
        text-transform: uppercase;
        font-weight: 500;
        line-height: 1.5rem;
      }

      div {
        margin-left: auto;
      }
    }

    .display {
      background: #fbfcfc;
      padding: 1.25rem;

      .deets {
        display: flex;
        padding-bottom: 0.75rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #e5e7eb;

        &.card {
          display: flex;

          .ml {
            margin-left: 20px;
          }
        }

        p {
          font-size: 0.875rem;
          color: #74787c;
          line-height: 1.25rem;
          font-weight: 300;

          &:nth-child(2) {
            letter-spacing: 0.07em;
            font-weight: 300;
            padding-top: 0.25rem;
          }
        }
      }
    }

    div.border-t {
      border-top: 1px solid #e5e7eb;
    }
  }
`;
