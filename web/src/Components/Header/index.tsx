import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  import: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = props => {
  const [selectedLink, setSelectedLink] = useState(true);

  return (
    <Header selected={[selectedLink, !selectedLink]} importRoute={props.import}>
      <img src={Logo} alt="goFinances" />
      <ul>
        <li>
          <Link to="/" onClick={() => setSelectedLink(true)}>
            Listagem
          </Link>
        </li>
        <li>
          <Link to="/import" onClick={() => setSelectedLink(false)}>
            Importar
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default HeaderComponent;
