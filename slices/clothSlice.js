import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Array to store cart items
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0, // Total price of items in the cart
};

const clothSlice = createSlice({
  name: "cloth",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === newItem.id &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedSize === newItem.selectedSize,
      );

      if (existingItem) {
        // If the item already exists in the cart (same id, color, and size), update its quantity
        existingItem.quantity += newItem.quantity;
        existingItem.price += newItem.price;
      } else {
        // If it's a new item, add it to the cart
        state.cartItems.push(newItem);
      }

      // Update total quantity and total price
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price,
        0,
      );
    },

    removeFromCart: (state, action) => {
      const itemToRemove = action.payload; // Expecting { id, selectedColor, selectedSize }
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === itemToRemove.id &&
          item.selectedColor === itemToRemove.selectedColor &&
          item.selectedSize === itemToRemove.selectedSize,
      );

      if (itemIndex !== -1) {
        // Remove the item from cartItems array
        state.cartItems.splice(itemIndex, 1);

        // Recalculate totals
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price,
          0,
        );
      }
    },

    clearCart: (state) => {
      // Reset state to initial values
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = clothSlice.actions;
export default clothSlice.reducer;
