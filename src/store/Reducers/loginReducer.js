import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        logged: !!auth.currentUser,
        signed: true,
        users: [],
        displayName: ""
    },
    reducers: {
        update: (state, action) => {
            state.logged = action.payload;
        },
        updateSign: (state,action) => {
            state.signed = action.payload;
        },
        updateName: (state,action) => {
            state.displayName = action.payload;
        }
    }
})

export const loginReducer = loginSlice.reducer;
export const {update,updateSign,updateName} = loginSlice.actions;
export const loginSelector = (state) => state.loginReducer.logged;
export const signedSelector = (state) => state.loginReducer.signed;
export const nameSelector = (state) => state.loginReducer.displayName;

