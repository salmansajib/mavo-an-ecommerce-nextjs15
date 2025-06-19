import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../utils/persistState";

// Initialize state
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Load persisted state if available
const persistedState = loadFromLocalStorage("cart");
const cartInitialState = persistedState || initialState;

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === newItem.id &&
          item.type === newItem.type &&
          JSON.stringify(item.attributes) ===
            JSON.stringify(newItem.attributes),
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.price += newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          attributes: newItem.attributes || {},
        });
      }

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
      const itemToRemove = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === itemToRemove.id &&
          item.type === itemToRemove.type &&
          JSON.stringify(item.attributes) ===
            JSON.stringify(itemToRemove.attributes),
      );

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
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

    updateQuantity: (state, action) => {
      const { id, type, attributes, newQuantity } = action.payload;

      const item = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.type === type &&
          JSON.stringify(item.attributes) === JSON.stringify(attributes),
      );

      if (item && newQuantity >= 1) {
        item.quantity = newQuantity;
        item.price = item.unitPrice * newQuantity;

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
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
