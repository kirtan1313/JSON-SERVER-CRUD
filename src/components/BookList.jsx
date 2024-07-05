import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, deleteBook } from '../redux/booksSlice';
import './BookList.css';
// import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }


  return (
    <>
        {/* <button className='d-flex justify-content-center align-items-center' >Form</button> */}
      <div className="book-list">
        <h1>Library Books</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((book) => {
                return (
                  <tr>
                    <td >{book.title}</td>
                    <td >{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.year}</td>
                    <td> <button onClick={() => handleDelete(book.id)} >Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
