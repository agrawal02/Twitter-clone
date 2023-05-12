import axios from "axios";

// create login api for user login
export const login = async (data) => {
    const response = await axios.post("/api/auth/login", data);

    return response.data;
};

// create register api for singup or registeration
export const register = async (data) => {
    const response = await axios.post("/api/auth/register", data);

    return response.data;
};
