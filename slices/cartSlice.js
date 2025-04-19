import { createSlice } from "@reduxjs/toolkit";

// Utility function to safely load from localStorage on client side
const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem("cart");
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
      console.warn("Error loading cart from localStorage:", e);
      return undefined;
    }
  }
  return undefined;
};

// Utility function to save to localStorage
const saveToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cart", serializedState);
    } catch (e) {
      console.warn("Error saving cart to localStorage:", e);
    }
  }
};

// Initialize state, using localStorage only on client side
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Load persisted state if available
const persistedState = loadFromLocalStorage();
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

      // Save updated state to localStorage
      saveToLocalStorage(state);
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

      // Save updated state to localStorage
      saveToLocalStorage(state);
    },

    updateQuantity: (state, action) => {
      const { id, type, attributes, newQuantity } = action.payload;

      // Find the item to update
      const item = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.type === type &&
          JSON.stringify(item.attributes) === JSON.stringify(attributes),
      );

      if (item && newQuantity >= 1) {
        // Update quantity and price
        item.quantity = newQuantity;
        item.price = item.unitPrice * newQuantity; // Recalculate total price for item

        // Recalculate totals
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price,
          0,
        );

        saveToLocalStorage(state);
      }
      // If newQuantity < 1, do nothing (handled in component with toast)
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
