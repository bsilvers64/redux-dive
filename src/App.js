import React from "react";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { calculateTotal } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  // this is for our conditional render of the modal component
  const modal = useSelector((state) => state.modal);

  // check this state slice -
  // console.log(cartItems);

  // tracks any change in the cartItems object and if so, dispatches the action to recalculate
  // the amount of items and total price
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="App">
      <main>
        {/*conditional render with the help of isOpen state slice from the modal feature*/}
        {modal.isOpen && <Modal />}
        <NavBar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
