import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const validateUserLoginAuth = async (data) => {
    const response = await axios.post(`${BASE_URL}/user/login`, data);
    return response.data;
}



export const ValidateOrgLoginAuth = async (data) => {
    const response = await axios.post(`${BASE_URL}/org/login`, data);
    return response.data;
}

export const validateUserLoginAuthWithStatusCode = async (data) => {
    const response = await axios.post(`${BASE_URL}/user/login`, data)
    .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }else{
            return response.data;
        }
      });
}
