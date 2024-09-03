import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/authSlice";
import cartSlice from "./feature/cartSlice";
import addSlice from "./feature/addSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    addto: addSlice,
  },
});

export default store;
