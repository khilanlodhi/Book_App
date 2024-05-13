
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './bookPages.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://softwium.com/api/books') 
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div >
      <h1>Books</h1>
      <ul className='cards' >
        {books.map((book) => (
          <li key={book.id} className='bookTitle'>
            <Link to={`/books/${book.id}`}>{book.title}</Link> 
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
