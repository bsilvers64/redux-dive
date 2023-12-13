import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";

// configureStore will call combinereducers to combine our reducers into a root reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

// the store provides us access to the state slices from different features - 
//console.log(store.getState());

console.log(store.cart);