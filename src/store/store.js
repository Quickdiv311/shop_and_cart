import { configureStore } from "@reduxjs/toolkit";
import {cartReducer}  from "./Reducers/CartReducer";
import {loginReducer}  from "./Reducers/loginReducer";

export const store = configureStore({
    reducer: {
        cartReducer,
        loginReducer,
    }
})