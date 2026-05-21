import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Register from './pages/Register';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact'
import Login from './pages/Login';
import View_Details from './pages/View_Details'

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/register' element={<Register />} />

        <Route path='/login' element={<Login />} />


        <Route path='/blog' element={<Blog />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />
        <Route
      path='/movie/:id'
      element={<View_Details />}
   />

      </Routes>
    </>
  );
}

export default App;