import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./modules/products/productSlice";
const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
