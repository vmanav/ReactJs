import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);

  const totalAmount = amounts.reduce((acc, curr) => (acc += curr), 0).toFixed(2)
  console.log(totalAmount);


  return (
    <>
      <h4>Your Balance</h4>
      <h1>INR {totalAmount}</h1>
    </>
  )
}
