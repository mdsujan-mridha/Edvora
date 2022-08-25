import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navbar/Navigation';
import { Routes, Route, Link } from "react-router-dom";
import Products from './components/Products/Products';
import Users from './components/users/Users';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='orders' element={<Orders/>}></Route>
        </Routes>
        <Footer/>
      </>
  );
}

export default App;
