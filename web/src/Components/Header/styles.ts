import styled, { css } from 'styled-components';

interface HeaderProps {
  selected: [boolean, boolean];
  importRoute: boolean;
}

export const Header = styled.header<HeaderProps>`
  width: 100vw;
  height: 27.5vh;
  background-color: #5636d3;

  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;

  ${props =>
    props.importRoute &&
    css`
      height: 11vh;
    `}

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
        opacity: 0.8;

        ${({ selected }) =>
          selected.map(a => {
            return (
              a &&
              css`
                color: black;
              `
            );
          })}
      }
    }
  }
`;
