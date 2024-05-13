// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import Intro from './pages/Intro'

const App = () => (
 
  <Router>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<BookDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
