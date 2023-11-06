import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./feature/dataSlice";
import cartReducer from "./feature/cartSlice";
import enrolledReducer from "./feature/enrolledSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    data: dataReducer,
    enrolled: enrolledReducer,
  },
});

export default store;
