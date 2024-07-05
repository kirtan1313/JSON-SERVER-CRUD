import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import './App.css';
// import Header from './components/Header/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/update/:id" element={<UpdateBook />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
