import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        initialized: true,
        searchInput: ""
    },
    reducers: {
       initialize: (state,action) => {
          state.items = action.payload;
       },

       add: (state,action) => {
         let index = state.items.findIndex(i => i.id === action.payload.id);
         state.items[index].added = true;
       },
       update: (state,action) => {
           let index = state.items.findIndex(i => i.id === action.payload.id);
           state.items[index] = action.payload;
       },
       deleteItem: (state,action) => {
        let index = state.items.findIndex(i => i.id === action.payload.id);
        state.items[index].quantity = 1;
        state.items[index].added = false;
       },

       updateInit: (state,action) => {
          state.initialized = false;
       },

       updateSearch: (state, action) => {
         state.searchInput = action.payload;
       }
    }
})

export const cartReducer = cartSlice.reducer;
export const {add,update,deleteItem,initialize,updateInit,updateSearch} = cartSlice.actions;
export const itemsSelector = (state) => state.cartReducer.items;
export const initSelector = (state) => state.cartReducer.initialized;
export const searchSelector = (state) => state.cartReducer.searchInput;


