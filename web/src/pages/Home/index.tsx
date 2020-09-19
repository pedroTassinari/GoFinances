import React from 'react';
import { Link } from 'react-router-dom';

import { Header, BalanceList, TransactionsList } from './styles';
import Logo from '../../assets/logo.svg';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import Sale from '../../assets/sale.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';

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
      <TransactionsList>
        <tr>
          <th>
            <div>
              Título
              <img src={ArrowDown} alt="Down" />
            </div>
          </th>
          <th>
            <div>
              Preço
              <img src={ArrowDown} alt="Down" />
            </div>
          </th>
          <th>
            <div>
              Categoria
              <img src={ArrowDown} alt="Down" />
            </div>
          </th>
          <th>
            <div>
              Data
              <img src={ArrowUp} alt="Up" />
            </div>
          </th>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>R$12.000,00</td>
          <td>
            <div>
              <img src={Sale} alt="Cash" />
              Venda
            </div>
          </td>
          <td>13/04/2020</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>R$12.000,00</td>
          <td>
            <div>
              <img src={Sale} alt="Cash" />
              Venda
            </div>
          </td>
          <td>13/04/2020</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>R$12.000,00</td>
          <td>
            <div>
              <img src={Sale} alt="Cash" />
              Venda
            </div>
          </td>
          <td>13/04/2020</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>R$12.000,00</td>
          <td>
            <div>
              <img src={Sale} alt="Cash" />
              Venda
            </div>
          </td>
          <td>13/04/2020</td>
        </tr>
      </TransactionsList>
    </>
  );
};

export default List;
