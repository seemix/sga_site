import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        openMenu: false,
        scrollMenu: false
    },
    reducers: {
        setOpenMenu(state) {
            state.openMenu = !state.openMenu;
        },
        scrollNav(state, action) {
            state.scrollMenu = action.payload;
        }
    }
})

export const {setOpenMenu, scrollNav} = themeSlice.actions;
export const themeStore = themeSlice.reducer;
export default themeStore;