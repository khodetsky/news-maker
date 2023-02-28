import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: false,
    username: '',
}

export const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoggedIn(state, action) {
            state.userLoggedIn = action.payload;
        },
        setUsername(state, action) {
           state.username = action.payload;
        }
    }
});

export const { setUserLoggedIn, setUsername } = userDataSlice.actions;