import axios from "axios";
import { API_KEY, API_URL } from "@env";

const login = async (email, password) => {
  return axios.post(
    `${API_URL}/user/login`,
    {
      email_address: email,
      password: password,
    },
    { headers: { apiKey: API_KEY } }
  );
};

const register = async (
  email,
  password,
  fullName,
  gender,
  phoneNumber,
  role
) => {
  return axios.post(
    `${API_URL}/user/register?condition=` + role,
    {
      email_address: email,
      password: password,
      name: fullName,
      gender: gender,
      phone_number: phoneNumber,
    },
    { headers: { apiKey: API_KEY } }
  );
};

export { login, register };
