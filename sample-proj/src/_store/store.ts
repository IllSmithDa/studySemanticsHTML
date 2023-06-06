import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../_reducers/menuSlice";

export const store = configureStore({
  reducer: {
    navMenu: menuReducer,
  }
})
