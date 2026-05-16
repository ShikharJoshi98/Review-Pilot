import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./authThunk";

const initialState = {
    user: null,
    loading: false,
    authCheckLoading: true,
    error: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    extraReducers: (builder) => {
        builder
            //register
            .addCase(registerThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerThunk.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
     }
})