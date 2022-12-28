import {configureStore} from "@reduxjs/toolkit";
import themeStore from "./theme.slice";

const store = configureStore({
    reducer: {
        themeStore
    }
});

export default store;