// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExpenseTracker from './pages/ExpenseTracker';
import AddExpense from './pages/AddExpense';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
        <Route path="/add" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;

