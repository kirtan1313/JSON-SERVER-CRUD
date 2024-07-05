import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../redux/booksSlice';
import './UpdateBook.css';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const book = books.find((book) => book.id === Number(id));

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [year, setYear] = useState(book.year);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { ...book, title, author, genre, year };
    dispatch(updateBook(updatedBook));
    navigate('/');
  };

  return (
    <div class="container">
      <div class="form_area">
        <form action="" onSubmit={handleSubmit} >
          <div class="form_group">
            <label class="sub_title" for="name">Title</label>
            <input placeholder="Enter your Title" class="form_style" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div class="form_group">
            <label class="sub_title" for="email">Author</label>
            <input placeholder="Enter your Author" id="text" class="form_style" type="text" value={author} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div class="form_group">
            <label class="sub_title" for="password">Password</label>
            <input placeholder="Enter your Genre" id="text" class="form_style" type="text" value={genre} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div class="form_group">
            <label class="sub_title" for="password">Password</label>
            <input placeholder="Enter your Year" id="text" class="form_style" type="number" value={year} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <button class="btn" type='submit'>SIGN UP</button>
            <p>Have an Account? <a class="link" href="">Login Here!</a></p><a class="link" href="">
            </a></div><a class="link" href="">

          </a></form></div><a class="link" href="">
      </a></div>
  );
};

export default UpdateBook;
