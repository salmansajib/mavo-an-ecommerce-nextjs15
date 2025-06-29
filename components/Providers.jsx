"use client";

import React from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistState } from "@/utils/persistState";

// Initialize persistence for cart and favorite slices
persistState(store, [
  { name: "cart", key: "cart" },
  { name: "wishlist", key: "wishlist" },
]);

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
        <Toaster />
      </Provider>
    </QueryClientProvider>
  );
}
