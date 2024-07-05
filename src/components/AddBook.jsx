import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import './AddBook.css';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, year };
    dispatch(addBook(newBook));
    navigate('/')
      setTitle("")
      setAuthor("")
      setGenre("");
      setYear("");
  };

 

  return (


    <>
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
              <button class="btn" type='submit'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
};

export default AddBook;
