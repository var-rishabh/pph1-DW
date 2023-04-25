import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProductCatalogue from './components/Product/ProductCatalogue';
import Product from './components/Product/Product';
import Process from './components/Process/Process';
import Order from './components/Order/Order';
import Checkout from './components/Checkout/Checkout';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<ProductCatalogue/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/process" element={<Process/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
