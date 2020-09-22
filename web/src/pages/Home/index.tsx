import React, { useState, useEffect } from 'react';

import {
  BalanceList,
  TransactionsList,
  TransactionComponent,
  TransactionComponentHeader,
} from './styles';

import Header from '../../Components/Header';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import Sale from '../../assets/sale.svg';
import Gift from '../../assets/gift.svg';
import Food from '../../assets/food.svg';
import House from '../../assets/house.svg';

import ArrowDown from '../../assets/arrow-down.svg';

import api from '../../services/api';

import currencyFormat from '../../utils/currencyFormat';
import dateFormat from '../../utils/dateFormat';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Transaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: {
    title: string;
  };
  created_at: string;
  id: string;
}

interface Icons {
  Sale: string;
  Gift: string;
  Food: string;
  House: string;
}

const Home = () => {
  const [balance, setBalance] = useState<Balance>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const icons = {
    Sale,
    Gift,
    Food,
    House,
  };

  useEffect(() => {
    api.get('/transactions').then(response => {
      const {
        balance: apiBalance,
        transactions: apiTransactions,
      } = response.data;

      setBalance(apiBalance);
      setTransactions(apiTransactions);
    });
  }, []);

  return (
    <>
      {balance && (
        <>
          <Header small={false} firstLink />
          <BalanceList>
            <ul>
              <li>
                <div>
                  <div>
                    <strong>Entradas</strong>
                    <img src={Income} alt="Income" />
                  </div>
                  <h1>{currencyFormat(balance.income)}</h1>
                </div>
              </li>

              <li>
                <div>
                  <div>
                    <strong>Saídas</strong>
                    <img src={Outcome} alt="Outcome" />
                  </div>
                  <h1>{currencyFormat(balance.outcome)}</h1>
                </div>
              </li>

              <li>
                <div>
                  <div>
                    <strong>Total</strong>
                    <img src={Total} alt="Total" />
                  </div>
                  <h1>{currencyFormat(balance.total)}</h1>
                </div>
              </li>
            </ul>
          </BalanceList>
          <TransactionsList>
            <TransactionComponentHeader>
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
                  <img src={ArrowDown} alt="Down" />
                </div>
              </th>
            </TransactionComponentHeader>
            {transactions.map(transaction => {
              const iconKey = transaction.category.title as keyof Icons;
              return (
                <TransactionComponent
                  key={transaction.id}
                  type={transaction.type}
                >
                  <td>{transaction.title}</td>
                  <td>
                    {transaction.type === 'outcome'
                      ? `- ${currencyFormat(transaction.value)}`
                      : currencyFormat(transaction.value)}
                  </td>
                  <td>
                    <div>
                      <img
                        src={icons[iconKey] || icons.Sale}
                        alt={transaction.category.title}
                      />
                      {transaction.category.title}
                    </div>
                  </td>
                  <td>{dateFormat(transaction.created_at)}</td>
                </TransactionComponent>
              );
            })}
          </TransactionsList>
        </>
      )}
    </>
  );
};

export default Home;
