import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "@/utils/persistState";

// Initialize state
const initialState = {
  wishlistItems: [],
  totalItems: 0,
};

// Load persisted state if available
const persistedState = loadFromLocalStorage("wishlist");
const wishlistInitialState = persistedState || initialState;

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: wishlistInitialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wishlistItems.find(
        (item) =>
          item.id === newItem.id &&
          item.type === newItem.type &&
          JSON.stringify(item.attributes) ===
            JSON.stringify(newItem.attributes),
      );

      if (!existingItem) {
        state.wishlistItems.push({
          ...newItem,
          attributes: newItem.attributes || {},
        });
      }

      state.totalItems = state.wishlistItems.length;
    },

    removeFromWishlist: (state, action) => {
      const itemToRemove = action.payload;
      const itemIndex = state.wishlistItems.findIndex(
        (item) =>
          item.id === itemToRemove.id &&
          item.type === itemToRemove.type &&
          JSON.stringify(item.attributes) ===
            JSON.stringify(itemToRemove.attributes),
      );

      if (itemIndex !== -1) {
        state.wishlistItems.splice(itemIndex, 1);
        state.totalItems = state.wishlistItems.length;
      }
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      state.totalItems = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
