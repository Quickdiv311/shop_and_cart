import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        logged: false
    },
    reducers: {
        update: (state, action) => {
            state.logged = action.payload;
        }
    }
})

export const loginReducer = loginSlice.reducer;
export const {update} = loginSlice.actions;
export const loginSelector = (state) => state.loginReducer.logged;