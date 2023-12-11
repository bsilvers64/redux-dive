import React from 'react';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
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
