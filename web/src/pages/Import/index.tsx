import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

import Logo from '../../assets/logo.svg';

const Import = () => {
  return (
    <>
      <Header>
        <img src={Logo} alt="goFinances" />
        <ul>
          <li>
            <Link to="/">Listagem</Link>
          </li>
          <li>
            <Link to="/import">Importar</Link>
          </li>
        </ul>
      </Header>
    </>
  );
};

export default Import;
