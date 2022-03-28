import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home.js';
import Produto from './pages/Produto.js'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/produto' element={<Produto />}>
        <Route path=':nome' element={<Produto />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// reportWebVitals();
