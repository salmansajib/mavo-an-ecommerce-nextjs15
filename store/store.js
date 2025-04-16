import { configureStore } from "@reduxjs/toolkit";
// import clothReducer from "@/slices/clothSlice";
import cartReducer from "@/slices/cartSlice";

export const store = configureStore({
  reducer: {
    // cloth: clothReducer,
    cart: cartReducer,
  },
});
