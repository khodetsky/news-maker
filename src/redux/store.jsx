import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from './userDataSlice';
import { newsSlice } from "./newsSlice";

export const store = configureStore({
    reducer: {
        user: userDataSlice.reducer,
        news: newsSlice.reducer,
    }
})