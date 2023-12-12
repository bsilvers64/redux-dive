import React from 'react';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { calculateTotal } from './features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

function App() {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  useEffect(()=> {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="App">
      <main>
        <NavBar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
