import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      cartItems: [],
    },
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cartItems.find(item => item._id === action.payload._id);
        if (existingItem) {
          existingItem.quantity += 1; 
        } else {
          state.cartItems.push({
            _id: action.payload._id,
            name: action.payload.name,
            price: action.payload.price,
            photo: action.payload.photo,
            quantity: 1,
          }); 
        }
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;
  