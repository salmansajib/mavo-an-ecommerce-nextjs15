import { createSlice } from "@reduxjs/toolkit";

// load state from local storage if exists
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return {
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    }
    const state = JSON.parse(serializedState);
    return {
      cartItems: Array.isArray(state.cartItems) ? state.cartItems : [],
      totalQuantity: state.totalQuantity || 0,
      totalPrice: state.totalPrice || 0,
    };
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return {
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
  }
};

const initialState = loadState();

// save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Could not save to localStorage:", err);
  }
};

const clothSlice = createSlice({
  name: "cloth",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      if (!newItem || !newItem.id) {
        console.error("Invalid payload:", newItem);
        return;
      }
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === newItem.id &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedSize === newItem.selectedSize,
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.price += newItem.price;
      } else {
        state.cartItems.push(newItem);
      }

      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price,
        0,
      );

      saveState(state);
    },

    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === itemToRemove.id &&
          item.selectedColor === itemToRemove.selectedColor &&
          item.selectedSize === itemToRemove.selectedSize,
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

      saveState(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveState(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = clothSlice.actions;
export default clothSlice.reducer;
