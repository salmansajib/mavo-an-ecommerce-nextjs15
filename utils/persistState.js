"use client";

// Load state from localStorage for a given key
export const loadFromLocalStorage = (key) => {
  if (typeof window === "undefined") return undefined;
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn(`Error loading ${key} from localStorage:`, e);
    return undefined;
  }
};

// Save state to localStorage for a given key
export const saveToLocalStorage = (key, state) => {
  if (typeof window === "undefined") return;
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.warn(`Error saving ${key} to localStorage:`, e);
  }
};

// Subscribe to store changes and persist specified slices
export const persistState = (store, slices) => {
  if (typeof window === "undefined") return;
  store.subscribe(() => {
    const state = store.getState();
    slices.forEach((slice) => {
      saveToLocalStorage(slice.key, state[slice.name]);
    });
  });
};
