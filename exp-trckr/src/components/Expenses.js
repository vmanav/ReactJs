import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);

  const income = amounts
    .filter(amt => amt > 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const expense = amounts
    .filter(amt => amt < 0)
    .reduce((acc, curr) => (acc += curr), 0) * -1
      .toFixed(2);


  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+INR {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-INR {expense}</p>
      </div>
    </div>
  )
}
