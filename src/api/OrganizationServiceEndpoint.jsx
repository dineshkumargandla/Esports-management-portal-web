import axios from "axios";
const BASE_URL = "http://localhost:8080";

const token = localStorage.getItem('authToken');

export const GetOrganizationDetails = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params :{ email: data}
  };
  const response = await axios.get(`${BASE_URL}/org/myorg`, config);
  return response.data;
}

export const GetAllOrganizationDetails = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(`${BASE_URL}/org/all`, config);
  return response.data;
}

