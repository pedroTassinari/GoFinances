import React from 'react';
import { Link } from 'react-router-dom';

import { Header, BalanceList } from './styles';
import Logo from '../../assets/logo.svg';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

const List = () => {
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
      <BalanceList>
        <ul>
          <li>
            <div>
              <div>
                <strong>Entradas</strong>
                <img src={Income} alt="Income" />
              </div>
              <h1>R$17.400,00</h1>
            </div>
          </li>

          <li>
            <div>
              <div>
                <strong>Saídas</strong>
                <img src={Outcome} alt="Outcome" />
              </div>
              <h1>R$1.259,00</h1>
            </div>
          </li>

          <li>
            <div>
              <div>
                <strong>Total</strong>
                <img src={Total} alt="Total" />
              </div>
              <h1>R$16.141,00</h1>
            </div>
          </li>
        </ul>
      </BalanceList>
    </>
  );
};

export default List;
