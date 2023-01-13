import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authService} from "../services/auth.service";

export const login = createAsyncThunk(
    'authSlice/login',
    async (loginData, thunkAPI) => {
        // console.log(email);
        try {
            const response = await authService.login(loginData);
            // await localStorage.setItem('token', response.accessToken);
            await localStorage.setItem('refreshToken', response.refreshToken);
            return response;
        } catch (e) {
            const message =
                (e.response &&
                    e.response.data &&
                    e.response.data.message) ||
                e.message ||
                e.toString();
            // thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        auth: false,
        accessToken: '',
        user: {},
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.auth = false;
                state.error = null;
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.auth = true;
                state.accesstoken = action.payload.accesstoken;
                state.user = action.payload?.user;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'rejected';
                state.accessToken = '';
                state.error = action.payload.message;
                state.user = {};
            })
    }
});

export const authStore = authSlice.reducer;
export default authStore;