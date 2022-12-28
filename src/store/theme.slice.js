import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        openMenu: false
    },
    reducers: {
        setOpenMenu(state) {
            state.openMenu = !state.openMenu;
        }
    }
})

export const {setOpenMenu} = themeSlice.actions;
export const themeStore = themeSlice.reducer;
export default themeStore;