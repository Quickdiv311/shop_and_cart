import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
       add: (state,action) => {
         state.cartItems.push(action.payload);
       },
       update: (state,action) => {
           let index = state.cartItems.findIndex(i => i.id === action.payload.id);
           state.cartItems[index] = action.payload;
       },
       deleteItem: (state,action) => {
           let index = state.cartItems.findIndex(i => i.id === action.payload.id);
           state.cartItems.splice(index,1);
       }
    }
})

export const cartReducer = cartSlice.reducer;
export const {add,update,deleteItem} = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer.cartItems;