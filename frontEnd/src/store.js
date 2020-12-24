import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductDetailsReducer,
  ProductListReducer,
  ProductDeleteReducer,
  ProductCreateReducer,
  ProductUpdateReducer,
} from "./reducers/productReducers";

import {
  UserLoginReducer,
  UserRegisterReducer,
  UserDetailsReducer,
  UserUpdateProfileReducer,
  UserListReducer,
  DeleteUserReducer,
  EditUserReducer,
} from "./reducers/userReducer";

import {
  OrderCreateReducer,
  OrderDetailsReducer,
  OrderPayReducer,
  OrderListReducer,
} from "./reducers/orderReducers";

import { CartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: ProductListReducer,
  productDetails: ProductDetailsReducer,
  productDelete: ProductDeleteReducer,
  productCreate: ProductCreateReducer,
  productUpdate: ProductUpdateReducer,
  cart: CartReducer,
  userLogin: UserLoginReducer,
  userRegister: UserRegisterReducer,
  userDetails: UserDetailsReducer,
  userList: UserListReducer,
  userUpdateProfile: UserUpdateProfileReducer,
  orderCreate: OrderCreateReducer,
  orderDetails: OrderDetailsReducer,
  orderPay: OrderPayReducer,
  orderList: OrderListReducer,
  userDelete: DeleteUserReducer,
  userEdit: EditUserReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
