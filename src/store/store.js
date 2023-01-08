import {configureStore} from "@reduxjs/toolkit";
import themeStore from "./theme.slice";
import newsStore from "./news.slice";

const store = configureStore({
    reducer: {
        themeStore,
        newsStore
    }
});

export default store;