import { configureStore } from "@reduxjs/toolkit";
import { authSlice, uiSlice, mapboxSlice } from "./";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    mapbox: mapboxSlice.reducer,
  },
});
