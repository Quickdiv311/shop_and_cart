import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        logged: false,
        signed: true,
        users: []
    },
    reducers: {
        update: (state, action) => {
            state.logged = action.payload;
        },
        updateSign: (state,action) => {
            state.signed = action.payload;
        }
    }
})

export const loginReducer = loginSlice.reducer;
export const {update,updateSign} = loginSlice.actions;
export const loginSelector = (state) => state.loginReducer.logged;
export const signedSelector = (state) => state.loginReducer.signed;
