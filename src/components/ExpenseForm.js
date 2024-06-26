// src/components/ExpenseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExpenseForm = () => {
  const [date, setDate] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [payee, setPayee] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      date,
      product,
      price: parseFloat(price),
      payee
    };

    axios.post('http://localhost:3001/expenses', newExpense)
      .then(response => {
        console.log('Expense added:', response.data);
        navigate('/');
      })
      .catch(error => console.error('Error adding expense:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Product Purchased</label>
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required />
      </div>
      <div>
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Payee</label>
        <input type="text" value={payee} onChange={(e) => setPayee(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
