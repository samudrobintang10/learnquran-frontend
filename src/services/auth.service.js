import axios from "axios";

const login = async (email, password) => {
  console.log(process.env.API_URL)
  console.log(process.env.API_KEY)
  return axios.post(
    `${process.env.API_URL}/user/login`,
    {
      email_address: email,
      password: password,
    },
    { headers: { apiKey: process.env.API_KEY } }
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
  console.log(process.env.API_URL)
  console.log(process.env.API_KEY)
  return axios.post(
    `${process.env.API_URL}/user/register?condition=` + role,
    {
      email_address: email,
      password: password,
      name: fullName,
      gender: gender,
      phone_number: phoneNumber,
    },
    { headers: { apiKey: process.env.API_KEY } }
  );
};

export { login, register };
