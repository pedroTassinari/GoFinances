import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  small: boolean;
  firstLink?: boolean;
  secondLink?: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = props => {
  return (
    <Header small={props.small}>
      <img src={Logo} alt="goFinances" />
      <ul>
        <StyledLink key={0} selected={props.firstLink}>
          <Link to="/">Listagem</Link>
        </StyledLink>
        <StyledLink key={1} selected={props.secondLink}>
          <Link to="/import">Importar</Link>
        </StyledLink>
      </ul>
    </Header>
  );
};

export default HeaderComponent;
