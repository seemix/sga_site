import { configureStore } from '@reduxjs/toolkit';
import themeStore from './theme.slice';
import newsStore from './news.slice';
import authStore from './auth.slice';

const store = configureStore({
    reducer: {
        themeStore,
        newsStore,
        authStore
    }
});

export default store;