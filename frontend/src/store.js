import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducer,
  productCategoryReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import {
  wishlistAddReducer,
  listWishListProductsReducer,
} from "./reducers/wishListReducers";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productlist: productListReducer,
  productCategorylist: productCategoryReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  listWishListProducts: listWishListProductsReducer,
  wishlistAdd: wishlistAddReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
