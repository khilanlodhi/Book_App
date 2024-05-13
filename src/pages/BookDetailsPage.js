
import './bookDetails.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://softwium.com/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="body">
    <div className='bookDetail'>
      <h1 className='bookDetailTitle'>{book.title}</h1>
      <p>ISBN: {book.isbn}</p>
      <p>Page Count: {book.pageCount}</p>
      <p>Authors: {book.authors.join(', ')}</p>
    </div>
    </div>
  );
};

export default BookDetailsPage;
