import styled from "styled-components";

export const SideBarWrapper = styled.div`
  height: 100vh;
  main {
    background: #222840;
    height: 100%;
    position: relative;
    top: 0px;
    bottom: 0px;

    nav {
      height: 100%;
      overflow: auto;
      width: 15rem;

      .company-holder {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        height: 4.75rem;

        .image-holder {
          padding: 0.25rem;
          background: #fff 0 0 no-repeat padding-box;
          border: 1px solid #e7eaf4;
          border-radius: 6px;
          height: 2rem;
          width: 2rem;

          img {
            height: 100%;
          }
        }

        p {
          margin-left: 0.75rem;
          color: #e7eaf3;
          font-weight: 500;
          font-size: 0.875rem;
        }
      }

      .hr {
        border-top: 1px solid #babfc6;
      }
    }

    .routes {
      padding: 1.5rem;
      max-height: calc(100vh - 80px);
      overflow-y: scroll;
      margin-right: 2px;

      ::-webkit-scrollbar {
        display: none;
      }

      ul {
        list-style: none;
        padding: 0;

        font-size: 0.875rem;

        li {
          padding-bottom: 1.5rem;

          a {
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;
            padding-top: 0.25rem;

            &:hover {
              color: #8da4ba;
            }

            img {
              margin-right: 0.625rem;
            }
          }
        }
      }

      .business {
        color: #d0f0fd;
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        padding-top: 0.5rem;
        margin-bottom: 1rem;
      }

      .log-out {
        color: #e42c66;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;
