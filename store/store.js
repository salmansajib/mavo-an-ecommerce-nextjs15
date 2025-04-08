import { configureStore } from "@reduxjs/toolkit";
import clothReducer from "@/slices/clothSlice";

export const store = configureStore({
  reducer: {
    cloth: clothReducer,
  },
});
