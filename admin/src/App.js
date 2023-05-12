import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/MainLayout';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Users from './components/Users/Users';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
