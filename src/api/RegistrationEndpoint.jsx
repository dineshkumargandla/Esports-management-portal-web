import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const registerUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/user/registration`, data);
    return response.data;
}

export const registerOrganization = async (data) => {
    const response = await axios.post(`${BASE_URL}/org/registration`, data);
    return response.data;
}