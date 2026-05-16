import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "./authApi";

export const registerThunk = createAsyncThunk(
    "authRegister",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await registerUser(credentials);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)