// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Product Purchased</th>
          <th>Price</th>
          <th>Payee</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.product}</td>
            <td>{expense.price}</td>
            <td>{expense.payee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
