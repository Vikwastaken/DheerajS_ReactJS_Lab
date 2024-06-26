// src/pages/ExpenseTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseList from '../components/ExpenseList';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/expenses')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const calculateTotals = (expenses) => {
    let totalSpent = 0;
    let rahulSpent = 0;
    let rameshSpent = 0;

    expenses.forEach(expense => {
      totalSpent += expense.price;
      if (expense.payee === 'Rahul') {
        rahulSpent += expense.price;
      } else if (expense.payee === 'Ramesh') {
        rameshSpent += expense.price;
      }
    });

    return { totalSpent, rahulSpent, rameshSpent };
  };

  const { totalSpent, rahulSpent, rameshSpent } = calculateTotals(expenses);
  const balance = rahulSpent - rameshSpent;
  const paymentInfo = balance > 0 ? `Ramesh owes Rahul ${balance}` : `Rahul owes Ramesh ${-balance}`;

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseList expenses={expenses} />
      <div className="summary">
        <p>Total Spent: {totalSpent}</p>
        <p>Rahul Spent: {rahulSpent}</p>
        <p>Ramesh Spent: {rameshSpent}</p>
        <p>{paymentInfo}</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;

