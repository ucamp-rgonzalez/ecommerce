import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Products from './pages/Products.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='products' element={<Products />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
