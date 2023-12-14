import { createSlice} from "@reduxjs/toolkit";
//import cartItems from "../../cartItems";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoadin: true,
}

// asynchronous action creator
export const getCartItems = createAsyncThunk( 'cart/getCartItems', ()=>{
    return fetch(url)
    .then(resp => resp.json())
    .catch((err) => console.log(err));
});



const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, action) => {
      const itemId = action.payload;
      const ourItem = state.cartItems.find((item) => item.id === itemId);
      if (ourItem) {
        console.log(action);
        ourItem.amount += 1;
      }
    },

    // can also use function signature like this (destructured to only take payload of action)
    decrease: (state, { payload }) => {
      const ourItem = state.cartItems.find((item) => item.id === payload);
      if (ourItem) {
        ourItem.amount -= 1;
      }
    },

    // this reducer is to change our amount of items variable and the total price of cart
    // it calculates the variables each time the cartItems object is changed, i.e. the number of any item
    // is increased or decreased

    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoadin = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoadin = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoadin = false;
    },
  },
});

// check all actioncreators in the myslice.actions object.
//console.log(cartSlice.actions);

export const {clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions
//console.log(cartSlice.reducer);
export default cartSlice.reducer;

