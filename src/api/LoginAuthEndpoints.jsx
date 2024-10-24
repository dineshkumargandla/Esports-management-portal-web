import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const validateUserLoginAuth = async (data) => {
    const response = await axios.post(`${BASE_URL}/user/login`, data);
    return response;
}
export const ValidateOrgLoginAuth = async (data) => {
    const response = await axios.post(`${BASE_URL}/org/login`, data);
    return response.data;
}

