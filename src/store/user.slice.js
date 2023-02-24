import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userService } from '../services/user.service';

export const sendFormData = createAsyncThunk(
    'formSlice/sendForm',
    async (formData, thunkAPI) => {
        try {
            return await userService.sendForm(formData);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    'authSlice/register',
    async (registerData, thunkAPI) => {
        try {
            return await userService.register(registerData);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const formHandler = createSlice({
    name: 'userSlice',
    initialState: {
        formData: {},
        status: null,
        error: null
    },
    reducers: {
        resetState: (state, action) => {
            state.status = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendFormData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(sendFormData.fulfilled, (state) => {
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(sendFormData.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'error';
            })
            .addCase(registerUser.fulfilled, state => {
                state.status = 'fulfilled'
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});

export const userStore = formHandler.reducer;
export const { resetState } = formHandler.actions;
export default userStore;