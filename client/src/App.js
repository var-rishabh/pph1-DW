import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import ProductCatalogue from './components/Product/ProductCatalogue';
import Product from './components/Product/Product';
import Process from './components/Process/Process';
import Checkout from './components/Checkout/Checkout';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";
import Layout from './components/Layout/Layout';
import Location from './components/Signup/Location';
import Auth from './components/Auth/Auth';
import Forgot from './components/Forgot/Forgot';
import PhoneAuth from './components/OAuth/PhoneAuth';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import { useEffect } from 'react';
import Profile from './components/Profile/Profile';
import { auth } from './firebase';
import { getIdToken } from 'firebase/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const { loading, isAuthenticated } = useSelector(state => state.userReducer);
  getIdToken(auth.currentUser).then((idToken) => {
  console.log(idToken);
  }).catch((error) => {
  console.log(error);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductCatalogue />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/process" element={<Process />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={loading ? (
            <div className="loading"><div className='loading__circle'></div></div>
          ) : isAuthenticated ? (<Profile />) : (null)} />
        </Route>
        {!isAuthenticated &&
          <Route path="/" element={<Auth />} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/location" element={<Location />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/phone" element={<PhoneAuth />} />
          </Route>
        }
        {/* 404 Not Found */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
