import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '../services/auth.service';

export const login = createAsyncThunk(
    'authSlice/login',
    async (loginData, thunkAPI) => {
        try {
            const response = await authService.login(loginData);
            await localStorage.setItem('token', response.accessToken);
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

export const checkLogin = createAsyncThunk(
    'authSlice/checkLogin',
    async (_, thunkAPI) => {
        return await authService.checkAuth();
    }
);

export const logout = createAsyncThunk(
    'authSlice/logout',
    async (refreshToken, thunkAPI) => {
        return await authService.logout(refreshToken);
    }
)

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
                state.accessToken = action.payload.accessToken;
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
            .addCase(checkLogin.pending, state => {
                state.status = 'loading';
                state.error = null;
                state.auth = false;
            })
            .addCase(checkLogin.fulfilled, (state, action) => {
                state.auth = true;
                state.user = action.payload.userDto;
                state.status = 'fulfilled';
            })
            .addCase(checkLogin.rejected, (state, action) => {
                state.auth = false;
                state.error = action.payload;
                state.status = 'error'
            })
            .addCase(logout.fulfilled, state => {
                state.auth = false;
                state.user = {};
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
            })
    }
});

export const authStore = authSlice.reducer;
export default authStore;