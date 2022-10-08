import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Shop } from './components/Shop';

function App() {

  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart')
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const getItemIndex = (item, cart) => {
    if (cart.length < 1)
      return null;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].key === item.key)
        return i;
    }
    return null;
  }
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header cart={cart} setCart={setCart} getItemIndex={getItemIndex}/><Main cart={cart} setCart={setCart} /></>} />
        <Route path='/shop' element={<><Header cart={cart} setCart={setCart} getItemIndex={getItemIndex}/><Shop cart={cart} setCart={setCart} getItemIndex={getItemIndex}/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
