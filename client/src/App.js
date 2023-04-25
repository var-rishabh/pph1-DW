import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Landing />} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
