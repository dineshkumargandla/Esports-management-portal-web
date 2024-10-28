import axios from "axios";
const BASE_URL = "http://localhost:8080";

const token = localStorage.getItem('authToken');

export const GetUserDetails = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params :{ email: data}
  };
  const response = await axios.get(`${BASE_URL}/user/me`, config);
  return response.data;
}

