import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 11vh;
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
        font-weight: 500px;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
`;

export const Tittle = styled.h1`
  font-family: Poppins;
  font-weight: 500px;
  font-size: 45px;
  text-align: center;
  line-height: 54px;
  color: #363f5f;
  margin-top: 7.5vh;
`;

export const DropzoneContainer = styled.div`
  height: 40vh;
  width: 48.25vw;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4.75vh 0 0 26vw;

  div:first-child {
    width: 39.75vw;
    height: 14vh;
    background: #ffffff;
    border: 2px dashed #969cb3;
    border-radius: 5px;
    margin-top: 7.5vh;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: Poppins;
      color: #5636d3;
      font-size: 20px;
      line-height: 30px;
    }
  }

  div {
    width: 39.75vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6.25vh;

    span {
      font-family: Poppins;
      font-size: 15px;
      line-height: 22.5px;
      color: #969cb3;
      display: flex;

      img {
        margin-right: 0.75vw;
        height: 2vh;
        width: 1.25vw;
      }
    }

    button {
      width: 14.75vw;
      height: 6vh;
      background: #ff872c;
      border-radius: 5px;
      border: none;

      font-family: Poppins;
      font-weight: 500;
      font-size: 17.5px;
      color: #ffffff;
      text-align: center;
    }
  }
`;
