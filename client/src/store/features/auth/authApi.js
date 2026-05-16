import { post } from "../../../api/apiClient";

export const registerUser = (userData) =>
    post('/auth/register', userData);