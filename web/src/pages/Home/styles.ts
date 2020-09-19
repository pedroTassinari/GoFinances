import styled from 'styled-components';

// 1 vw = 19,2px
// 1vh = 10,8px

// aumentar tudo em 25%

export const Header = styled.header`
  width: 100vw;
  height: 27.5vh;
  background-color: #5636d3;

  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 12.5vw;
    height: 3.75vh;
    margin: 3.75vh 0 0 11.25vw;
  }

  ul {
    list-style: none;
    margin: 3.75vh 11.25vw 0 0;
    display: flex;
    flex-direction: row;

    li {
      margin-left: 2.5vw;

      a {
        text-decoration: none;
        font-family: Poppins;
        font-weight: 500;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
`;

export const BalanceList = styled.nav`
  width: 100vw;
  height: 16.25vh;
  margin-top: -11.25vh;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      margin-left: 2.5vw;

      div {
        height: 16.25vh;
        width: 23.75vw;
        background: #ffffff;
        border-radius: 5px;

        div {
          width: 100%;
          height: 30%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding-top: 2.5vh;

          img {
            margin-right: 1.25vw;
            height: 3.25vh;
            width: 2vw;
          }

          strong {
            font-family: Poppins;
            font-weight: normal;
            font-size: 20px;
            color: #363f5f;
            margin-left: 2.5vw;
          }
        }

        h1 {
          font-family: Poppins;
          font-weight: normal;
          font-size: 45px;
          color: #363f5f;
          margin: 2vh 0 2.5vh 2.5vw;
        }
      }

      &:first-child {
        margin-left: 12vw;
      }
    }
  }
`;

export const TransactionsList = styled.table`
  width: 76.25vw;
  height: 37.5vh;
  margin-left: 12vw;
  margin-top: 5vh;
  border-collapse: separate;
  border-spacing: 0 2vh;

  tr {
    background: #ffffff;
    height: 7.5vh;

    th {
      font-family: Poppins;
      font-size: 20px;
      font-weight: normal;
      color: #969cb3;
      text-align: unset;
      padding-left: 2.5vw;

      div {
        display: flex;

        img {
          margin-left: 0.75vw;
        }
      }
    }

    td {
      font-family: Poppins;
      font-weight: normal;
      padding-left: 2.5vw;
      font-size: 20px;

      &:first-child {
        border: 1px solid #ffffff;
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border: 1px solid #ffffff;
        border-radius: 0 5px 5px 0;
        color: #969cb3;
      }

      div {
        display: flex;
        color: #969cb3;

        img {
          margin-right: 0.75vw;
        }
      }
    }

    &:first-child {
      background: #e5e5e5;
    }
  }
`;