import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./modules/cartItems/cartSlice";
import { productReducer } from "./modules/products/productSlice";
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
