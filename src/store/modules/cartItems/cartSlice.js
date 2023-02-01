import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    async getCartItems(action, payload) {
      try {
        cartList = await AsyncStorage.getItem("@MySuperStore:cartItems");
      } catch (error) {
        // Error saving data
      }
    },
    async addToCart(action, payload) {
      console.log(payload);
      try {
        const list = await AsyncStorage.getItem("@MySuperStore:cartItems");
        console.log(list, "mohit");
        if (!list) {
          list = [];
        }
        list.push(payload.productId);
        console.log(list,'after')
        await AsyncStorage.setItem(
          "@MySuperStore:cartItems",
          JSON.stringify(list)
        );
        cartList = list;
      } catch (error) {
        // Error saving data
      }
    },
    async removeFromCart(action, payload) {
      try {
        const list = await AsyncStorage.getItem("@MySuperStore:cartItems");
        list.remove(payload.productId);
        await AsyncStorage.setItem(
          "@MySuperStore:cartItems",
          JSON.stringify(list)
        );
        cartList = list;
      } catch (error) {
        // Error saving data
      }
    },
  },
});

export const { getCartItems, addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
