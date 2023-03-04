import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsImages: [],
    newsData: [],
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNewsImages(state, action) {
            state.newsImages = [...state.newsImages, ...action.payload];
        },
        addNewsData(state, action) {
           state.newsData = [...state.newsData, ...action.payload];
        },
        deleteNewsData(state, action) {
           state.newsData = state.newsData.filter(post => post.id !== action.payload);
        }
    }
});

export const { addNewsImages, addNewsData, deleteNewsData } = newsSlice.actions;