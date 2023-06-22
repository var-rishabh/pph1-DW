import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/MainLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Users from './components/Users/Users';
import Coupons from './components/Coupons/Coupons';
import Payments from './components/Payments/Payments';
import Messages from './components/Messages/Messages';
import OrderDetails from './components/Orders/OrderDetails';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Auth from './components/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from './Actions/Auth';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(LoadUser());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
          {isAuthenticated ?
            <Route path="/" element={<Auth />} />
            :
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/coupons" element={<Coupons />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Route>
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
