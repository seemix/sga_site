import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { newsService } from '../services/news.service';

export const getAllNews = createAsyncThunk(
    'newsSlice/getAllNews',
    async (params) => {
        try {
            return await newsService.getAll(params);
        } catch (e) {
            throw new Error('error getting news');
        }
    }
);

export const getNewsById = createAsyncThunk(
    'newsSlice/getById',
    async (id) => {
        try {
            return await newsService.getById(id);
        } catch (e) {
            throw new Error('error retrieve news!');
        }
    }
);

export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: {
        news: [],
        single: {},
        status: null,
        error: null,
        pages: null,
        page: 1
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllNews.fulfilled, (state, action) => {
                state.news = action.payload.news;
                state.pages = action.payload.pages;
                state.page = action.payload.page;
                state.status = 'fulfilled'
            })
            .addCase(getAllNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllNews.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(getNewsById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getNewsById.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.single = action.payload;
                state.error = null;
            })
            .addCase(getNewsById.rejected, (state) => {
                state.status = 'rejected'
                state.error = 'No such item';
            })
    }
})

export const newsStore = newsSlice.reducer;
export default newsStore;