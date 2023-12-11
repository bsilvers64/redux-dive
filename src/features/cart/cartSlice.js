import { createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoadin: true,
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state)=> {
      state.cartItems = [];
    },
  },
});


export const {clearCart} = cartSlice.actions
console.log(cartSlice.actions);
export default cartSlice.reducer;
