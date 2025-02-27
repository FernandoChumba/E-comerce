
import React from 'react'

//importo react router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importo paginas
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
//importo componentes
import Carrito from './components/CartItem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
