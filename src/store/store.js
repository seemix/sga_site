import { configureStore } from '@reduxjs/toolkit';
import themeStore from './theme.slice';
import newsStore from './news.slice';
import authStore from './auth.slice';
import userStore from './user.slice';

const store = configureStore({
    reducer: {
        themeStore,
        newsStore,
        authStore,
        userStore
    }
});

export default store;